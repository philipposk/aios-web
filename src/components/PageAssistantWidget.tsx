"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

/**
 * Mounts the page-assistant floating widget on the marketing site.
 *
 * The widget talks to the AI-OS backend (NEXT_PUBLIC_AIOS_API_URL) which proxies
 * each LLM round-trip through /v1/llm/complete so API keys never reach the browser.
 *
 * If NEXT_PUBLIC_AIOS_API_URL is not set the widget silently omits itself — the
 * marketing site stays fully functional without a live AI-OS backend.
 */
export default function PageAssistantWidget() {
  const initialized = useRef(false);
  const serverUrl = process.env.NEXT_PUBLIC_AIOS_API_URL;
  const authToken = process.env.NEXT_PUBLIC_AIOS_API_TOKEN;

  useEffect(() => {
    if (initialized.current || !serverUrl) return;

    function mount() {
      const PA = (window as any).PageAssistant;
      if (!PA) return;
      initialized.current = true;

      PA.init({
        serverUrl,
        // v0.2: authToken is now passed to PA.init() so the LLM proxy also sends the
        // bearer header — not just the health check capability below.
        ...(authToken ? { authToken } : {}),
        appName: "AI OS",
        persona:
          "You are the AI OS assistant on the AI OS marketing site (aios.6x7.gr). You help visitors understand what AI OS is, how it works, how to install it, and how to get started. AI OS is a local-first, multi-agent coding orchestrator by 6x7.gr.",
        greeting:
          "Hi! I can answer questions about AI OS — how it works, how to set it up, or what makes it different.",
        knowledge: `AI OS (aios.6x7.gr) is a multi-agent coding orchestrator that runs entirely on your machine.
It uses LangGraph to coordinate a plan → code → review → commit pipeline, pausing at three human checkpoints (plan, code, commit) before touching anything in your repo.
It routes LLM calls across free providers — OpenRouter, Groq, Anthropic, Ollama — with a hard budget cap so you never get a surprise bill.
It can work alone or in "crew mode" where a coordinator delegates to specialist sub-agents.
It's open-source (MIT) on GitHub: https://github.com/philipposk/AI-OS.
To get started: clone the repo, copy .env.example → .env, add at least one provider key, and run the Streamlit dashboard or the workflow SPA.`,
        suggestions: [
          "How do I install AI OS?",
          "What LLM providers does it support?",
          "What are the three human checkpoints?",
          "How does crew mode work?",
          "Is it free to use?",
        ],
        voice: false,
        memory: "session",
        capabilities: [
          {
            name: "check_aios_status",
            description:
              "Check whether the AI OS backend is reachable and report which providers are available.",
            parameters: { type: "object", properties: {} },
            run: async () => {
              try {
                const headers: Record<string, string> = {};
                if (authToken) headers["Authorization"] = `Bearer ${authToken}`;
                const r = await fetch(`${serverUrl}/health`, { headers });
                if (!r.ok) return { ok: false, error: r.status };
                return r.json();
              } catch (e) {
                return { ok: false, error: String(e) };
              }
            },
            render: (r: any) =>
              r.ok
                ? `AI OS backend is online. Providers available: ${(r.providers || []).join(", ") || "none detected"}.`
                : `AI OS backend is unreachable (${r.error ?? "network error"}).`,
          },
        ],
      });
    }

    // Script may already be loaded (hot reload); try immediately, fall back to polling.
    mount();
    const interval = setInterval(() => {
      if ((window as any).PageAssistant) {
        clearInterval(interval);
        mount();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [serverUrl, authToken]);

  // No backend configured → render nothing.
  if (!serverUrl) return null;

  return (
    <Script
      src="/page-assistant.global.js"
      strategy="lazyOnload"
      onLoad={() => {
        const PA = (window as any).PageAssistant;
        if (PA && !initialized.current) {
          // Script loaded after the effect ran — re-trigger via synthetic event.
          window.dispatchEvent(new Event("page-assistant-ready"));
        }
      }}
    />
  );
}
