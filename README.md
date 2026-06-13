# Xiangxin Zhou's Homepage

Personal academic homepage built with [Astro](https://astro.build/), deployed on GitHub Pages.

**Live site:** https://zhouxiangxin1998.github.io/

## Development

```bash
npm install
npm run dev        # Start dev server
npm run build      # Build for production (output in dist/)
npm run preview    # Preview production build locally
```

## Project Structure

```
src/
├── content/publications/   # Publication entries (Markdown with frontmatter)
├── data/profile.ts         # Bio, links, and profile info
├── layouts/Base.astro      # HTML layout
├── pages/index.astro       # Homepage
└── styles/global.css       # Global styles
public/
└── fonts/                  # Self-hosted fonts
```

## Deployment

Pushes to the `mine` branch automatically trigger GitHub Actions to build and deploy to GitHub Pages.
