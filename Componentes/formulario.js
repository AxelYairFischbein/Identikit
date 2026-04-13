export function buildFormularioTemplate() {
	return `
		<form class="contact-form" action="#" method="post">
			<label for="contact-nombre">Nombre y Apellido</label>
			<input id="contact-nombre" name="nombre" type="text" placeholder="Tu nombre completo" required>

			<label for="contact-mail">Mail</label>
			<input id="contact-mail" name="mail" type="email" placeholder="tuemail@ejemplo.com" required>

			<label for="contact-descripcion">Descripcion</label>
			<textarea id="contact-descripcion" name="descripcion" rows="5" placeholder="Contame en que te puedo ayudar" required></textarea>

			<button type="submit">Enviar</button>
		</form>
	`;
}
