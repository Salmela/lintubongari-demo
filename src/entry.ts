import {bindable} from "aurelia-framework";

const SHOW_MENU_CSS = "display: initial;";

export class Entry {

	@bindable placeholder = "";
	@bindable value = "";

	menuStyle = "";

	menu = ["kotka", "harakka"];

	focus() {
		// show the menu
		let newStyle = SHOW_MENU_CSS;

		// the input size could be browser dependent so we set them here
		newStyle += `top: ${this.input.offsetHeight - 1}px;`;
		newStyle += `min-width: ${this.input.offsetWidth - 1}px;`;
		this.menuStyle = newStyle;
	}

	blur() {
		this.menuStyle = "";
	}
}

