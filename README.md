# MineLuck (spin-game)

A browser-based slot-style game built with **Pixi.js** for rendering and animation and **React** for the surrounding UI.

## Stack

- **React 19** / **React DOM**
- **TypeScript**
- **Pixi.js 8**
- **@pixi/sound**
- **Webpack 5** (bundling, dev server, asset pipeline)
- **Sass** (component styles)

## Prerequisites

- **Node.js** (LTS recommended) and **npm**

## Setup

```bash
npm install
```

## Development

```bash
npm start
```

Runs the webpack dev server (default port **8000** — see `webpack.config.js`).

## Production build

```bash
npm run build
```

Output is written to **`dist/`**. Static files under `src/assets` are copied to `dist/assets` during the build.

## Project layout (overview)

- `src/` — application source (game logic, Pixi setup, React UI)
- `src/assets/` — images, audio, and other static assets
- `webpack.config.js` — build and dev-server configuration
