// Prerenders the static markup of <App /> into dist/index.html after `vite build`.
// AI/search crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, etc.)
// otherwise only ever see an empty <div id="root"></div>.
import { build } from 'esbuild';
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const tmpDir = path.join(rootDir, '.prerender-tmp');
const tmpEntry = path.join(tmpDir, 'App.mjs');
const distIndex = path.join(rootDir, 'dist', 'index.html');

async function main() {
  if (!existsSync(distIndex)) {
    throw new Error(`${distIndex} not found — run "vite build" first.`);
  }

  await mkdir(tmpDir, { recursive: true });
  await build({
    entryPoints: [path.join(rootDir, 'src', 'App.tsx')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    jsx: 'automatic',
    outfile: tmpEntry,
    external: ['react', 'react-dom', 'react-dom/*', 'lucide-react'],
    logLevel: 'silent',
  });

  const { default: App } = await import(`${tmpEntry}?t=${Date.now()}`);
  const { renderToStaticMarkup } = await import('react-dom/server');
  const React = await import('react');

  const appHtml = renderToStaticMarkup(React.createElement(App));

  let html = await readFile(distIndex, 'utf-8');
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  await writeFile(distIndex, html);

  await rm(tmpDir, { recursive: true, force: true });

  console.log(`Prerendered ${appHtml.length.toLocaleString()} chars of markup into dist/index.html`);
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
