# Deployment — 2022-dev-lucaszapico-space

## Overview

| Field | Value |
|-------|-------|
| Project | `LucasZapico` |
| Project UUID | `ioc0skoc48808ggkcok0gooc` |
| Resource name | `2022-dev-lucaszapico-space` |
| Resource UUID | `o0gsg84sog0wkc48sogss4c4` |
| Server | Nextron (`d8o4k804o0s4c0ckg4gckcks`) |
| Source | Public GitHub (source_id 0) |
| Git repo | `LucasZapico/dev.lucaszapico.space-v4` |
| Type | Docker Compose (application) |
| Priority | Low |
| Domain | `https://2022-dev.lucaszapico.space` |

## Architecture

Single static site. Gatsby builds to `public/`, served by nginx.

```
┌─────────────────────┐
│  nginx (port 80)    │
│  static HTML/JS/CSS │
└─────────────────────┘
```

No database, no backend, no redis.

## Coolify Setup

Application created via API as a public GitHub docker compose app on the Nextron server under the LucasZapico project.

Domain is configured via `SERVICE_FQDN_WEB_80` in docker-compose.yml. Coolify reads this on deploy.

### Manual Steps Remaining

1. **Configure DNS** — point `2022-dev.lucaszapico.space` to Nextron IP or configure via Cloudflare
2. **Push changes** to `main` branch (Dockerfile, docker-compose.yml, nginx.conf)
3. **Deploy** via UI or API:

```bash
curl -s -X POST "https://coolify.bluemonkeymakes.com/api/v1/applications/o0gsg84sog0wkc48sogss4c4/deploy" \
  -H "Authorization: Bearer $TOKEN"
```

## Local Development

```bash
npm install
npm run dev           # http://localhost:8006
```

## Local Docker Build Test

```bash
docker compose build
docker compose up     # http://localhost:80
```

## Resource Requirements

| Service | Memory | CPU | Storage |
|---------|--------|-----|---------|
| web (nginx) | 256MB | 0.25 | ~200MB |

## Checklist

- [x] Coolify app created (UUID: `o0gsg84sog0wkc48sogss4c4`)
- [x] Git repo connected (`LucasZapico/dev.lucaszapico.space-v4`, public source)
- [x] `SERVICE_FQDN_WEB_80` set to `https://2022-dev.lucaszapico.space` in compose
- [ ] DNS configured for `2022-dev.lucaszapico.space`
- [ ] First deploy triggered
- [ ] `/styleguide` excluded from production build (verified locally)

## Notes

- Static site only — no database, no backend
- Build: node:18-alpine → nginx:alpine (multi-stage)
- Previously on Netlify — migrate DNS when ready
- Nextron server per SOP (low-priority, non-critical project)
