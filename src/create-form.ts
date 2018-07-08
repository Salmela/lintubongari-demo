import {inject} from "aurelia-framework";
import {Observation} from "./models/observation";
import {ObservationService} from "./backend/observation-service";
import {BirdRecomender, PlaceRecomender} from "./entry-recomenders";

@inject(ObservationService, BirdRecomender, PlaceRecomender)
export class ObservationForm {
	bird = "";
	where = "";
	hasFocus = true;

	constructor(private backend: ObservationService, private birdRecomender, private placeRecomender) {
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
