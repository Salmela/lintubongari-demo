import {Observation} from './observation'

export class App {
	heading = "Lintu Bongari v2.0";
	observations: Observation[] = [];
	observationWhere = "";
	observationBird = "";

	addObservation() {
		if (this.observationWhere && this.observationBird) {
			this.observations.push(new Observation(this.observationWhere, this.observationBird));
			this.observationWhere = "";
			this.observationBird = "";
		}
	}

	removeObservation(observation: Observation) {
		let index = this.observations.indexOf(observation);
		if (index != -1) {
			this.observations.splice(index, 1);
		}
	}
}
