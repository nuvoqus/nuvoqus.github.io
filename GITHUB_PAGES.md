# Deploying NUVOQUS to GitHub Pages

This site is a static Vite React app using TanStack Router. The included GitHub Actions
workflow (`.github/workflows/deploy.yml`) builds the site with npm and publishes the
`dist/` directory to GitHub Pages on every push to `main`.

## One-time setup

1. Create a new GitHub repository for this folder.
2. Push this code to the repository's `main` branch.
3. In the GitHub repository, go to **Settings -> Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`, or run the workflow manually from the **Actions** tab.

## Local commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Custom domain

Add a `public/CNAME` file containing your domain, such as `nuvoqus.com`, and configure
DNS according to GitHub's Pages documentation.

## Notes

- `public/.nojekyll` is included so GitHub Pages serves all files as-is.
- The workflow copies `dist/index.html` to `dist/404.html` so deep links such as
  `/services` resolve correctly on GitHub Pages.
- This setup assumes a root Pages deployment, such as `username.github.io` or a custom
  domain, not `username.github.io/repository-name`.
