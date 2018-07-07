import {Observation} from './observation'

export class App {
	constructor() {
		this.heading = "Lintu Bongari v2.0";
		this.observations = [];
		this.observationWhere = "";
		this.observationBird = "";
	}

	addObservation() {
		if (this.observationWhere && this.observationBird) {
			this.observations.push(new Observation(this.observationWhere, this.observationBird));
			this.observationWhere = "";
			this.observationBird = "";
		}
	}

	removeObservation(observation) {
		let index = this.observations.indexOf(observation);
		if (index != -1) {
			this.observations.splice(index, 1);
		}
	}
}
