# AI OS

A helper that takes a coding task you describe in plain words and tries to do it for you: it makes a plan, edits the files, and runs the tests — pausing to ask your approval at three points (before it starts, before it changes code, and before it saves anything for good) so you stay in control. It's built to be cheap, defaulting to free AI services unless you plug in a paid account.

## What it does
- You type a task ("add a login button", "fix this bug") and it figures out the steps.
- It writes and edits the code, then runs tests to check its work.
- It pauses for your yes/no at three checkpoints: the plan, the code, and saving the result.
- You can use it from a dashboard, a chat window, the command line, or Slack and Telegram.
- It tracks costs and has limits so it won't run up a surprise bill.

## Status
Working developer tool that you run on your own computer (Mac). The actual project lives in the `ai_company/` subfolder.

---
### For developers
The project is in `ai_company/` — see `ai_company/README.md` for the full architecture, quick start, and provider setup. In short: a Python LangGraph state machine (analyze → plan → checkpoint → code → test → review → checkpoint → commit) with a model router that rotates free LLM tiers (OpenRouter / Groq / NVIDIA NIM / Ollama) and falls back to Anthropic only if `ANTHROPIC_API_KEY` is set. State and accounting in SQLite. Surfaces: Streamlit dashboard, OpenAI-compatible HTTP shim, CLI, Slack/Telegram bots. 318/318 tests pass.
