import {inject} from 'aurelia-framework';
import {Observation} from './models/observation';
import {ObservationService} from './backend/observation-service';

@inject(ObservationService)
export class ObservationList {
	constructor(private backend: ObservationService) {
	}
}

