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

	focusHandler() {
		this.focus();
		this.setSelected(0);
	}

	blurHandler() {
		this.blur();
	}

	select(event) {
		this.value = event.target.textContent;
		this.blur();
	}

	keyPress(event) {
		let keyType = "";
		if (event.key === "ArrowUp" || event.keyCode == 38) {
			if (this.hasFocus()) {
				this.changeSelected(-1);
			} else {
				this.focus();
				this.setSelected(-1);
			}

		} else  if (event.key === "ArrowDown" || event.keyCode == 40) {
			if (this.hasFocus()) {
				this.changeSelected(+1);
			} else {
				this.focus();
				this.setSelected(0);
			}

		} else if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
			this.disableSelection();
			this.blur();
		} else if (event.key == "Enter" || event.keyCode == 13) {
			this.value = this.menu[this.selected];
			this.blur();
		}
		return true;
	}

	private hasFocus() {
		return !!this.menuStyle;
	}

	private focus() {
		// show the menu
		let newStyle = SHOW_MENU_CSS;

		// the input size could be browser dependent so we set them here
		newStyle += `top: ${this.input.offsetHeight - 1}px;`;
		newStyle += `min-width: ${this.input.offsetWidth - 1}px;`;
		this.menuStyle = newStyle;
	}

	private blur() {
		this.menuStyle = "";
	}

	private changeSelected(ammount: int) {
		let oldSelected = this.selected || 0;
		this.setSelected(oldSelected + ammount);
	}

	private disableSelection() {
		if (this.selected === undefined) return;
		this.getSelectedMenuItem().classList.remove("focus");
		this.selected = undefined;
	}

	private setSelected(index: int) {
		this.disableSelection();
		if (this.menu) {
			this.selected = this.wrapSelectionIndex(index);
			this.getSelectedMenuItem().classList.add("focus");
		}
	}

	private getSelectedMenuItem() {
		return this.menuElement.children[this.selected].children[0];
	}

	private wrapSelectionIndex(index: int) {
		return (index + this.menu.length) % this.menu.length;
	}
}

