<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Flag workflow (non-negotiable)

When you resolve a flag from `GET /api/flag` (e.g. `https://theoriasophia.com/api/flag`), you MUST `DELETE /api/flag` with its `id` in the same turn as the fix. No exceptions, no "want me to delete it?" — the code change and the delete are one atomic step. A fix that leaves the flag in the blob is an unfinished fix.

```bash
curl -X DELETE https://theoriasophia.com/api/flag -H "Content-Type: application/json" -d '{"id":"<flag-id>"}'
```

## Auto-push (non-negotiable)

This is a standalone git repo (`Alabaster-Saffron/theoria-sophia-website`) that deploys to `theoriasophia.com` via Vercel on push to `main`. Any code edit you make in this directory MUST be staged, committed, and pushed to `origin main` before ending your turn — otherwise the change isn't live. Don't ask permission, just push. Stage only the files you changed (never `git add -A`). If there are pre-existing modifications you didn't touch, leave them and mention them in the summary.
