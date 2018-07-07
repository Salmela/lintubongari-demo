import {inject} from 'aurelia-framework';
import {observable} from 'aurelia-binding';
import {Observation} from './models/observation';
import {ObservationService} from './backend/observation-service';

@inject(ObservationService)
export class ObservationList {
	@observable showSearch = false;
	searchQuery = "";

	constructor(private backend: ObservationService) {
	}

	search(query) {
		console.info(query);
		this.searchQuery = query;
	}

	showSearchChanged() {
		if (!this.showSearch) {
			this.searchQuery = "";
		}
	}

	removeObservation(observation: Observation) {
		this.backend.remove(observation);
	}
}

