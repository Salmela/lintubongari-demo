import {bindable, computedFrom} from "aurelia-framework";

const SHOW_MENU_CSS = "display: initial;";

export class Entry {

	@bindable placeholder = "";
	@bindable value = "";
	@bindable recomendationEngine = null;

	menuStyle = "";

	selected = 0;

	overflow = false;
	isEmpty = false;

	@computedFrom('value')
	get menu() {
		let result = this.recomendationEngine.filter(this.value);
		this.overflow = (result.length > 10);
		this.isEmpty = (result.length == 0);
		return result.slice(0, 10);
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

	disableSelection() {
		if (this.selected === undefined) return;
		this.getSelectedMenuItem().classList.remove("focus");
		this.selected = undefined;
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

	private setSelected(index: int) {
		this.disableSelection();
		if (this.menu.length == 0) {
			this.selected = undefined;
			return;
		}
		this.selected = this.wrapSelectionIndex(index);
		this.getSelectedMenuItem().classList.add("focus");
	}

	private getSelectedMenuItem() {
		if (this.selected === undefined) return null;
		return this.menuElement.children[this.selected].children[0];
	}

	private wrapSelectionIndex(index: int) {
		let length = this.menu.length;
		if (length == 0) return undefined;
		return (index + this.menu.length) % length;
	}
}

