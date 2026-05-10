# NUVOQUS Website

Static company website for NUVOQUS, built with Vite, React, TanStack Router, and
Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository for this folder.
2. Push the project to the `main` branch.
3. In GitHub, open **Settings -> Pages**.
4. Set **Source** to **GitHub Actions**.
5. The workflow at `.github/workflows/deploy.yml` will build and publish `dist/`.

The current configuration targets a root GitHub Pages deployment, such as
`username.github.io` or a custom domain.
