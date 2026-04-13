function buildMenuTemplate(basePath = "") {
	return `
		<input type="checkbox" id="menu-toggle" class="menu-toggle">
		<header class="topbar">
			<label for="menu-toggle" class="menu-btn" aria-label="Abrir menú">
				<span></span>
				<span></span>
				<span></span>
			</label>
			<label for="menu-toggle" class="topbar-titulo">Mi menú</label>
		</header>

		<label for="menu-toggle" class="menu-overlay" aria-hidden="true"></label>

		<nav class="menu-lateral" aria-label="Navegación principal">
			<div class="menu-cabecera"></div>
			<a href="${basePath}index.html">Inicio</a>
			<a href="${basePath}tabla.html">Tier List Gatos</a>
			<a href="${basePath}juegos/Trivia.html">Trivia de Gatos</a>
			<a href="${basePath}about.html">Acerca de mí</a>
			<a href="${basePath}card.html">Sobre el sitio</a>
			<a href="https://github.com/AxelYairFischbein" target="_blank" rel="noopener noreferrer">GitHub</a>
		</nav>
	`;
}

export function renderMenu(containerId, options = {}) {
	const container = document.getElementById(containerId);
	const basePath = options.basePath ?? "";

	if (!container) {
		return;
	}

	container.innerHTML = buildMenuTemplate(basePath);
}
