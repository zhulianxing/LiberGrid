# LiberGrid

token for every one.

LiberGrid is a distributed AI compute network and community project. Operators connect spare machines as nodes, run local models, and provide useful inference work. Builders use a simple OpenAI-compatible API.

This repository also contains the existing LiberGrid web application work from the GitHub repository. The documentation files added here are intended to make the project easier for humans and agents such as Codex, OpenClaw, and Claude Code to maintain.

## Quick Start

Use LiberGrid as an OpenAI-compatible provider:

```bash
curl -s https://libergrid.org/v1/models
```

Chat completions:

```bash
curl -s https://libergrid.org/v1/chat/completions \
  -H 'Authorization: Bearer libergrid-test' \
  -H 'Content-Type: application/json' \
  -d '{"model":"libergrid-auto","messages":[{"role":"user","content":"Say LIBERGRID ONLINE"}]}'
```

## OpenClaw Configuration

- Provider type: OpenAI compatible
- Base URL: `https://libergrid.org/v1`
- Model: `libergrid-auto`
- API Key: `libergrid-test`

中文快速配置：

在 OpenClaw 的模型或 Provider 设置里选择 OpenAI-compatible，然后填入：

- Base URL: `https://libergrid.org/v1`
- Model: `libergrid-auto`
- API Key: `libergrid-test`

## Project Status

LiberGrid is in public MVP mode. Rewards are off-chain points first. Public-chain settlement should only start after node milestones, audits, spending caps, and a pause switch.

## Repository Guide

- `API.md`: developer API usage.
- `OPENCLAW.md`: OpenClaw setup.
- `AGENTS.md`: agent maintainer rules.
- `GOVERNANCE.md`: community and agent governance.
- `ROADMAP.md`: milestone plan.
- `SETTLEMENT.md`: points and future chain settlement.
- `SECURITY.md`: security boundaries.
- `proposals/`: LiberGrid Improvement Proposals.
- `runbooks/`: operational runbooks.

## Existing Web App

The repository includes a Next.js application under `app/`, `components/`, `lib/`, `public/`, and related config files. Keep frontend changes reviewable and avoid committing secrets.
