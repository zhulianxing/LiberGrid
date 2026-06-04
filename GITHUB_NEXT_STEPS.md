# GitHub Next Steps for Seoul OpenClaw

The LiberGrid repository is ready at:

`/root/.openclaw/workspace/libergrid`

Current blocker:

GitHub authentication on Seoul is invalid.

Human step:

```bash
gh auth login -h github.com
```

Then publish:

```bash
cd /root/.openclaw/workspace/libergrid
./publish-to-github.sh
```

After publishing, OpenClaw should create these first GitHub issues:

1. Add daily `/api/status` and `/api/leaderboard` report automation.
2. Add worker install smoke test workflow.
3. Draft LIP-0001: off-chain points and public-chain settlement readiness.
4. Draft LIP-0002: agent maintainer permissions and red lines.
