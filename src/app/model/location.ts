import { icon, marker, Marker } from 'leaflet';

export interface PointInterface {
    type: string;
    coordinates: Array<number>;
}

export class PointModel implements PointInterface {
    coordinates: Array<number>;
    type: string;

    constructor(dataLocation: PointInterface) {
        this.coordinates = dataLocation.coordinates;
        this.type = dataLocation.type;
    }

    Lat(): number {
        return this.coordinates[1];
    }

    Lng(): number {
        return this.coordinates[0];
    }
}

export interface PointInterface {
    coordinates: Array<number>;
}

export interface LocationInterface {
    id: string;
    object: PointInterface;
}

export class LocationModel implements LocationInterface {
    id: string;
    object: PointInterface;

    constructor(location: LocationInterface) {
        this.id = location.id;
        this.object = location.object;
    }

    Point(): PointModel {
        return new PointModel(this.object);
    }

    Marker(): Marker {
        return marker([this.Point().Lat(), this.Point().Lng()], {
            icon: icon({
                iconSize: [20, 20],
                iconUrl: 'assets/markers/red.png',
            }),
        });
    }
}

// @ts-ignore
export function locationModelFromEventSource(listener: any): Array<LocationModel> {
    const data = JSON.parse(listener.data);
    let locationModelList: Array<LocationModel> = [];
    if (data != null) {
        const listData: Array<any> = data.data;
        locationModelList = listData.map<LocationModel>((x: LocationInterface) => new LocationModel(x));
    }
    return locationModelList;
}

export function markerListFromLocationModel(listLocationModel: Array<LocationModel>): Array<Marker> {
    return listLocationModel.map<Marker>((x: LocationModel) => x.Marker());
}
