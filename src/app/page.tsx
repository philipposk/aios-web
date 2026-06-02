const GITHUB_URL = "https://github.com/philipposk/AI-OS";

const CHECKPOINTS = [
  {
    n: "01",
    title: "Review the plan",
    body: "It reads the relevant files and proposes a step-by-step plan — exactly what it will do and which files it will touch. Nothing is edited until you approve. Reject it and it starts over with your feedback.",
  },
  {
    n: "02",
    title: "Review the code",
    body: "It writes the changes and runs your test suite. If tests fail after a few retries, it stops and shows you the failures instead of plowing ahead. You see the real diff before anything is kept.",
  },
  {
    n: "03",
    title: "Review the commit",
    body: "Read the diff, edit the commit message, and choose: commit straight to your branch, or open a pull request for review. Nothing reaches your repository without your sign-off.",
  },
];

const FEATURES = [
  {
    icon: "🛑",
    title: "You stay in control",
    body: "Three human checkpoints — plan, code, commit. Each is a real pause, not a notification you can miss.",
  },
  {
    icon: "💸",
    title: "Cheap by default",
    body: "Routes through free AI providers and rotates between them. A hard spending cap stops surprise bills before any call is made.",
  },
  {
    icon: "🧪",
    title: "Real software work",
    body: "It doesn't just suggest — it edits files, runs the tests, reviews its own diff, and commits. End to end.",
  },
  {
    icon: "💻",
    title: "Runs on your machine",
    body: "Your code, your keys, your computer. Nothing is uploaded to a service you don't control.",
  },
  {
    icon: "🧠",
    title: "Remembers your project",
    body: "Keeps a searchable memory of past work and decisions, so you repeat yourself less over time.",
  },
  {
    icon: "🔌",
    title: "Use it your way",
    body: "A web dashboard, a chat page, the command line, or Slack and Telegram — same engine behind each.",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "3.5rem 1.5rem 6rem" }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          <span className="pill"><span className="dot" /> Runs on your machine</span>
          <span className="pill">Free by default</span>
          <span className="pill">318 / 318 tests passing</span>
        </div>

        <p className="eyebrow" style={{ marginBottom: "0.9rem" }}>The AI coding agent you supervise</p>
        <h1
          style={{
            fontSize: "clamp(2.1rem, 5.2vw, 3.6rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            marginBottom: "1.1rem",
          }}
        >
          Ship real code with an AI agent —
          <br />
          <span style={{ color: "var(--accent)" }}>and stay in control.</span>
        </h1>
        <p
          style={{
            color: "var(--fg-muted)",
            fontSize: "1.12rem",
            lineHeight: 1.6,
            maxWidth: "40rem",
            marginBottom: "1.75rem",
          }}
        >
          Describe a change in plain English. AI OS plans the work, writes the code, and runs the
          tests — pausing for your approval at every step that matters. It commits nothing without
          your yes.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="#get-started" className="btn btn-primary">Get started →</a>
          <a href={GITHUB_URL} className="btn btn-ghost">View on GitHub</a>
        </div>
        <p style={{ color: "var(--fg-muted)", fontSize: "0.8rem", marginTop: "1rem" }}>
          macOS · Python · Open source · MIT
        </p>
      </section>

      {/* ── Demo video ───────────────────────────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <div className="glass" style={{ padding: "0.6rem", borderRadius: "1.25rem" }}>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/aios-demo-poster.jpg"
            style={{ width: "100%", borderRadius: "0.85rem", display: "block" }}
          >
            <source src="/aios-demo.mp4" type="video/mp4" />
          </video>
        </div>
        <p style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textAlign: "center", marginTop: "0.85rem" }}>
          A full task, start to finish — plan → approve → code &amp; test → approve → commit. (~2 min, with sound)
        </p>
      </section>

      {/* ── How it works: 3 checkpoints ──────────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>How it works</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Three checkpoints. You decide at each one.
        </h2>
        <p style={{ color: "var(--fg-muted)", fontSize: "1.02rem", lineHeight: 1.6, maxWidth: "42rem", marginBottom: "1.75rem" }}>
          AI OS runs a fixed pipeline and stops at three gates where a human has to say yes. Between
          the gates it works on its own; at the gates, it waits for you.
        </p>

        <div className="flow" style={{ marginBottom: "2rem" }}>
          <span className="node">Analyze</span><span className="arr">→</span>
          <span className="node">Plan</span><span className="arr">→</span>
          <span className="node gate">✋ Approve plan</span><span className="arr">→</span>
          <span className="node">Code</span><span className="arr">→</span>
          <span className="node">Test</span><span className="arr">→</span>
          <span className="node">Review</span><span className="arr">→</span>
          <span className="node gate">✋ Approve commit</span><span className="arr">→</span>
          <span className="node">Commit</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {CHECKPOINTS.map((c) => (
            <div key={c.n} className="glass" style={{ padding: "1.5rem" }}>
              <div className="numbadge" style={{ marginBottom: "0.9rem" }}>{c.n}</div>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.05rem" }}>{c.title}</h3>
              <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature grid ─────────────────────────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Why it&apos;s different</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem" }}>
          Built to do real work without going rogue.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="glass" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "0.7rem" }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.02rem" }}>{f.title}</h3>
              <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Get started ──────────────────────────────────────── */}
      <section id="get-started" style={{ marginBottom: "3.5rem", scrollMarginTop: "1.5rem" }}>
        <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>Get started</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Running in about five minutes.
        </h2>
        <p style={{ color: "var(--fg-muted)", fontSize: "1.02rem", lineHeight: 1.6, maxWidth: "42rem", marginBottom: "2rem" }}>
          AI OS runs on your own Mac. You bring at least one AI provider account — a free one is
          fine. No data leaves your machine except the calls you choose to make.
        </p>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          <Step n="1" title="Clone the repo and run setup">
            <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Creates a virtual environment, installs dependencies, and copies the example config.
            </p>
            <pre className="codeblock">
              <span className="c"># grab the code</span>{"\n"}
              git clone {GITHUB_URL}.git{"\n"}
              cd AI-OS/ai_company{"\n\n"}
              <span className="c"># one-shot setup</span>{"\n"}
              ./infrastructure/deploy.sh
            </pre>
          </Step>

          <Step n="2" title="Add one provider key">
            <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Open <code>.env</code> and paste in at least one key. A free tier (OpenRouter, Groq,
              NVIDIA NIM, or local Ollama) is enough to start. Paid Anthropic is optional.
            </p>
            <pre className="codeblock">
              <span className="c"># .env — any one of these works</span>{"\n"}
              OPENROUTER_API_KEY=...{"\n"}
              GROQ_API_KEY=...{"\n"}
              MAX_COST_PER_RUN=0.50   <span className="c"># hard spending cap</span>
            </pre>
          </Step>

          <Step n="3" title="Open the dashboard">
            <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Launch the web dashboard, type your first task, and approve your way through the three
              checkpoints. Prefer the terminal? <code>python cli.py</code> does the same thing.
            </p>
            <pre className="codeblock">
              streamlit run ui/dashboard.py
            </pre>
          </Step>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="glass" style={{ padding: "2.5rem 1.75rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
          Hand it a task. Keep the final word.
        </h2>
        <p style={{ color: "var(--fg-muted)", fontSize: "0.98rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
          Open source, free to run, and built so an AI can do the heavy lifting while you stay the
          one who ships.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href={GITHUB_URL} className="btn btn-primary">View on GitHub</a>
          <a href="#get-started" className="btn btn-ghost">Read the quick start</a>
        </div>
      </section>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      <div className="numbadge">{n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontWeight: 700, marginBottom: "0.6rem", fontSize: "1.05rem" }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
