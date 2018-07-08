import {inject} from "aurelia-framework";
import {Place} from "./models/place"
import {BirdService} from "./backend/bird-service"
import {PlaceService} from "./backend/place-service"

console.log(BirdService);

@inject(BirdService)
export class BirdRecomender {
	constructor(birdService: BirdService) {
		this.birdService = birdService;
	}

	filter(input: string) {
		let normalizedInput = input.toLowerCase();
		return this.birdService.all.filter(bird => bird.startsWith(normalizedInput));
	}
}

@inject(PlaceService)
export class PlaceRecomender {
	constructor(private placeService: PlaceService) {
		console.log(this.placeService);
	}

	filter(input: string) {
		let normalizedInput = input.toLowerCase();
		return this.placeService.all.filter(place => place.name.toLowerCase().startsWith(normalizedInput)).map(place => place.name);
	}
}
