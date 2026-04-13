export const menuTemplate = `
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
		<div class="menu-cabecera">
			<h2>Navegación</h2>
			<label for="menu-toggle" class="menu-cerrar" aria-label="Cerrar menú">×</label>
		</div>
		<a href="index.html">Inicio</a>
		<a href="tabla.html">Tier List Gatos</a>
		<a href="juegos/Terraria.html">Terraria</a>
		<a href="juegos/Trivia.html">Trivia de Gatos</a>
		<a href="card.html">Acerca de mí</a>
		<a href="about.html">Sobre el sitio</a>
		<a href="https://github.com/AxelYairFischbein" target="_blank" rel="noopener noreferrer">GitHub</a>
	</nav>
`;

export function renderMenu(containerId) {
	const container = document.getElementById(containerId);

	if (!container) {
		return;
	}

	container.innerHTML = menuTemplate;
}
