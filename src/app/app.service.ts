import { Injectable } from '@angular/core';
import { LocationModel, locationModelFromEventSource, markerListFromLocationModel } from './model/location';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Marker } from 'leaflet';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor() {

    }

    getStreamUser(): Observable<Array<Marker>> {
        return new Observable(observer => {
            const source = new EventSource(environment.api.concat('/stream?request=sse'));
            source.addEventListener('message', message => {
                const listLocationModel: Array<LocationModel> = locationModelFromEventSource(message);
                observer.next(markerListFromLocationModel(listLocationModel));
            });
        });
    }
}
