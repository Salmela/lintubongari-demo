import {bindable} from "aurelia-framework";

const SHOW_MENU_CSS = "display: initial;";

export class Entry {

	@bindable placeholder = "";
	@bindable value = "";
	@bindable recomendationEngine = null;

	menuStyle = "";

	selected = 0;

	get menu() {
		return this.recomendationEngine.filter(this.value);
	}

	focus() {
		// show the menu
		let newStyle = SHOW_MENU_CSS;

		// the input size could be browser dependent so we set them here
		newStyle += `top: ${this.input.offsetHeight - 1}px;`;
		newStyle += `min-width: ${this.input.offsetWidth - 1}px;`;
		this.menuStyle = newStyle;
		this.setSelected(0);
	}

	blur() {
		this.menuStyle = "";
	}

	blurEvent() {
		this.blur();
	}

	select(event) {
		this.value = event.target.textContent;
		this.blur();
	}

	keyPress(event) {
		let keyType = "";
		if (event.key === "ArrowUp" || event.keyCode == 38) {
			this.changeSelected(-1);

		} else  if (event.key === "ArrowDown" || event.keyCode == 40) {
			this.changeSelected(+1);

		} else if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
			this.disableSelection();
			this.blur();
		} else if (event.key == "Enter" || event.keyCode == 13) {
			this.value = this.menu[this.selected];
			this.blur();
		}
		return true;
	}

	changeSelected(ammount: int) {
		let oldSelected = this.selected || 0;
		this.setSelected(oldSelected + ammount);
	}

	disableSelection() {
		if (this.selected === undefined) return;
		this.menuElement.children[this.selected].classList.remove("focus");
		this.selected = undefined;
	}

	setSelected(index: int) {
		this.disableSelection();
		if (this.menu) {
			this.selected = this.wrapSelectionIndex(index);
			this.menuElement.children[this.selected].classList.add("focus");
		}
	}

	wrapSelectionIndex(index: int) {
		return (index + this.menu.length) % this.menu.length;
	}
}

