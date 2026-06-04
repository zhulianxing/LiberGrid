# LiberGrid

token for every one.

LiberGrid is a community-oriented distributed AI compute network. Operators connect spare machines as nodes, run local models, and provide useful inference work. Builders use a simple OpenAI-compatible API.

## Quick Start

English:

```bash
curl -s https://libergrid.org/v1/models
```

Chinese:

把 OpenClaw 或其他兼容 OpenAI 的工具配置为：

- Base URL: `https://libergrid.org/v1`
- Model: `libergrid-auto`
- API Key: `libergrid-test`

Then call chat completions:

```bash
curl -s https://libergrid.org/v1/chat/completions \
  -H 'Authorization: Bearer libergrid-test' \
  -H 'Content-Type: application/json' \
  -d '{"model":"libergrid-auto","messages":[{"role":"user","content":"Say LIBERGRID ONLINE"}]}'
```

## Status

The project is in public MVP mode. Rewards are off-chain points first. Public-chain settlement should only start after node milestones, audits, caps, and a pause switch.
