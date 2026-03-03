# NexShell Portfolio

This is the official portfolio website for **Paras Pawar** and **NexShell**.

Repository: https://github.com/NexShell-Official

## Run locally

1. Install dependencies
```bash
npm install
```

2. Start development server
```bash
npm run dev
```

3. Open in browser
```text
http://localhost:3000
```

## Content locations

- Main profile and social links: `src/resources/content.tsx`
- Site config (SEO, theme, routes): `src/resources/once-ui.config.ts`
- Blog posts: `src/app/blog/posts/*.mdx`
- Projects: `src/app/work/projects/*.mdx`

## GitHub deployment

This repo now includes GitHub Actions workflows:

- `.github/workflows/ci.yml`  
  Runs install + build on every push to `main` and all pull requests.
- `.github/workflows/deploy-vercel.yml`  
  Auto-deploys to Vercel on pushes to `main` (and manual trigger).

### Required GitHub Secrets

Add these in `GitHub Repo > Settings > Secrets and variables > Actions`:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

After adding secrets, push to `main` and deployment will run automatically.

## License

GNU GPL v3.0. See `LICENSE`.
