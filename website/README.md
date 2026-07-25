# NODE32_HOME Website

The official project landing page for the [ESP_HOME](https://github.com/Nitheesh-NR-Labs/NODE32_HOME) ecosystem.

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting Started

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The output is in `out/` ready for static hosting.

## Deploy to GitHub Pages

```bash
# Build with the correct base path
NEXT_PUBLIC_BASE_PATH=/NODE32_HOME npm run build

# The out/ directory can be deployed to the gh-pages branch
# or configured in GitHub Pages settings to serve from the root
```

If deploying to a custom domain, omit `NEXT_PUBLIC_BASE_PATH`.

## Project Structure

```
website/
├── app/               # Next.js App Router pages and layouts
│   ├── globals.css    # Global styles and Tailwind
│   ├── layout.tsx     # Root layout with fonts and metadata
│   ├── page.tsx       # Main landing page
│   └── not-found.tsx  # 404 page
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Hardware.tsx
│   ├── Ecosystem.tsx
│   ├── Status.tsx
│   ├── Roadmap.tsx
│   ├── Philosophy.tsx
│   ├── Contribute.tsx
│   ├── GitHub.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── SectionTitle.tsx
│   ├── FeatureCard.tsx
│   └── BackgroundEffects.tsx
├── data/
│   └── site.ts        # Site configuration and content
├── lib/
│   └── utils.ts       # Utility functions
└── public/            # Static assets
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter, JetBrains Mono (via next/font)

## License

MIT
