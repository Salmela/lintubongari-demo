import {inject} from 'aurelia-framework';
import {Observation} from './models/observation';
import {ObservationService} from './backend/observation-service';

@inject(ObservationService)
export class App {
	heading = "Lintu Bongari v2.0";
	constructor(private observationService: ObservationService) {
	}
}
