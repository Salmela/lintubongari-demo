export class ObservationFilterValueConverter {
	toView(array: Observation[], query: string) {
		let filtered: Observation[] = [];
		for (let observation of array) {
			if (this.filter(observation, query)) {
				filtered.push(observation);
			}
		}
		return filtered;
	}

	filter(observation: Observation, query: string) {
		return observation.bird.indexOf(query) !== -1 ||
			observation.where.indexOf(query) !== -1;
	}
}
