import {Observation} from '../observation';

export class ObservationService {
	constructor() {
		this.observations = [];
	}

	add(observation) {
		this.observations.push(observation);
	}

	remove(observation) {
		let index = this.observations.indexOf(observation);
		if (index != -1) {
			this.observations.splice(index, 1);
		}
	}
}
