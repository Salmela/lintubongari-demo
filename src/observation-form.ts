import {inject} from 'aurelia-framework';
import {Observation} from './observation';
import {ObservationService} from './backend/observation-service';

@inject(ObservationService)
export class ObservationForm {
	bird = "";
	where = "";
	hasFocus = true;

	constructor(private backend: ObservationService) {
	}

	addObservation() {
		if (this.bird && this.where) {
			this.backend.add(new Observation(this.bird, this.where));
			this.bird = "";
			this.where = "";
			this.hasFocus = true;
		}
	}
}
