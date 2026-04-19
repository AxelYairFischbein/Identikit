import { buildFormularioTemplate } from "./formulario.js";

function buildMenuTemplate(basePath = "") {
	return `
		<input type="checkbox" id="menu-toggle" class="menu-toggle">
		<input type="checkbox" id="contact-toggle" class="contact-toggle">
		<header class="topbar">
			<div class="topbar-left">
				<label for="menu-toggle" class="menu-btn" aria-label="Abrir menú">
					<span></span>
					<span></span>
					<span></span>
				</label>
				<label for="menu-toggle" class="topbar-titulo">Mi menú</label>
			</div>
			<label for="contact-toggle" class="contact-btn" aria-label="Abrir formulario de contacto">Contactame</label>
		</header>

		<label for="menu-toggle" class="menu-overlay" aria-hidden="true"></label>
		<label for="contact-toggle" class="contact-overlay" aria-hidden="true"></label>

		<nav class="menu-lateral" aria-label="Navegación principal">
			<div class="menu-cabecera"></div>
			<ul class="menu-lista">
				<li><a href="${basePath}index.html">Inicio</a></li>
				<li><a href="${basePath}tabla.html">Tier List Gatos</a></li>
				<li><a href="${basePath}juegos/Trivia.html">Trivia de Gatos</a></li>
				<li><a href="${basePath}about.html">Acerca de mí</a></li>
				<li><a href="${basePath}card.html">Tarjeta de contacto</a></li>
				<li><a href="https://github.com/AxelYairFischbein" target="_blank" rel="noopener noreferrer">GitHub</a></li>
			</ul>
		</nav>

		<aside class="contact-lateral" aria-label="Formulario de contacto">
			<div class="contact-cabecera">
				<h2>Contactame</h2>
			</div>
			${buildFormularioTemplate()}
		</aside>
	`;
}

export function renderMenu(containerId, options = {}) {
	const container = document.getElementById(containerId);
	const basePath = options.basePath ?? "";

	if (!container) {
		return;
	}

	container.innerHTML = buildMenuTemplate(basePath);

	const menuToggle = container.querySelector("#menu-toggle");
	const contactToggle = container.querySelector("#contact-toggle");

	if (!menuToggle || !contactToggle) {
		return;
	}

	const closePanels = () => {
		menuToggle.checked = false;
		contactToggle.checked = false;
	};

	window.addEventListener("scroll", closePanels, { passive: true });
}
