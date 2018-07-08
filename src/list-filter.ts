export class ObservationFilterValueConverter {
	toView(array: Observation[], query: string) {
		return array.filter(observation => this.filter(observation, query));
	}

	filter(observation: Observation, query: string) {
		return observation.bird.indexOf(query) !== -1 ||
			observation.where.indexOf(query) !== -1;
	}
}
