import {bindable} from 'aurelia-framework';

export class ObservationSearch {
	query = "";
	@bindable searchEvent;
	@bindable closeEvent;

	attached() {
		this.query = "";
	}

	keydown(event) {
		var isEscape = false;
		if ("key" in event) {
			isEscape = (event.key == "Escape" || event.key == "Esc");
		} else {
			isEscape = (event.keyCode == 27);
		}
		if (isEscape) {
			this.closeEvent();
		}
		return true;
	}

	search() {
		this.searchEvent({query: this.query});
		return true;
	}
}
