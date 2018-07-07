import {Observation} from './observation';

export class App {
	heading = "Lintu Bongari v2.0";
	observations: Observation[] = [];
	hasFocus = true;

	addObservation(observation) {
		this.observations.push(observation);
	}

	removeObservation(observation: Observation) {
		let index = this.observations.indexOf(observation);
		if (index != -1) {
			this.observations.splice(index, 1);
		}
	}
}
