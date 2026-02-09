# Propeller Website

Propeller Website is a documentation website built with [Next.js](https://nextjs.org/) and [Fumadocs](https://www.fumadocs.dev/), featuring documentation, blog, and OpenAPI reference pages.

## Features

- Documentation with MDX support
- Blog with author and date metadata
- OpenAPI/Swagger API reference documentation
- Static site generation for optimal performance
- Search functionality powered by Orama
- Responsive design with dark mode support
- SEO-optimized with sitemap and robots.txt generation

## Getting Started

### Prerequisites

- [Bun](https://bun.com/) (recommended) or Node.js

### Installation

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

Open <http://localhost:3000> with your browser to see the result.

### Build

Build the static site:

```bash
bun run build
```

The output will be generated in the `out` directory.

### Preview Production Build

```bash
bun run start
```

### Linting

```bash
bun run lint
bun run lint:fix  # Auto-fix issues
```

## Deployment

The site is configured for static export and can be deployed to GitHub Pages (via [`.github/workflows/cd.yml`](.github/workflows/cd.yml)) or any other static hosting provider.
