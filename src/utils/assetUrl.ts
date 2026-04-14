/** Copied/static files under dist/assets; must respect GitHub Pages base path. */
export function assetUrl(pathFromDistRoot: string): string {
	const base = __PUBLIC_PATH__
	const clean = pathFromDistRoot.replace(/^\/+/, '')
	return base.endsWith('/') ? base + clean : `${base}/${clean}`
}
