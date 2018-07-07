import {Observation} from '../models/observation';

export class ObservationService {
	constructor() {
		this.observations = [];
	}

	add(observation: Observation) {
		this.observations.push(observation);
	}

	remove(observation: Observation) {
		let index = this.observations.indexOf(observation);
		if (index != -1) {
			this.observations.splice(index, 1);
		}
	}
}
