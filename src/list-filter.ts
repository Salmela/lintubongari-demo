export class ObservationFilterValueConverter {
	toView(array: Observation[], query: string) {
		let normalizedQuery = this.normalize(query);
		return array.filter(observation => this.filter(observation, normalizedQuery));
	}

	private filter(observation: Observation, query: string) {
		let bird = this.normalize(observation.bird);
		let where = this.normalize(observation.where);

		return this.contains(bird, query) || this.contains(where, query);
	}

	private contains(str: string, subStr: string) {
		return str.indexOf(subStr) !== -1;
	}

	private normalize(word: string) {
		return word.toLowerCase();
	}
}
