import { Component, OnInit } from '@angular/core';
import { icon, latLng, Marker, marker, tileLayer } from 'leaflet';
import { AppService } from './app.service';
import { ToastrService } from 'ngx-toastr';
import { LocationModel, locationModelFromEventSource, markerListFromLocationModel } from './model/location';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    token = 'pk.eyJ1Ijoic3VwYW5hZGl0IiwiYSI6ImNqb3RlbmwyNjEwaHEzcG5oOG1uYXd2bDgifQ.Gb4UHqHuRsXhRsGj8ZfqQg';
    style = `ck1w9autf0f0r1co76j79eab7`;

    options = {
        layers: [
            tileLayer(`https://api.mapbox.com/styles/v1/supanadit/${this.style}/tiles/256/{z}/{x}/{y}@2x?access_token=${this.token}`, {
                maxZoom: 18,
            })
        ],
        zoom: 12,
        center: latLng(-6.914744, 107.609810)
    };

    layer = marker([-6.914744, 107.609810], {
        icon: icon({
            iconSize: [20, 20],
            iconUrl: 'assets/markers/red.png',
        }),
    });

    // @ts-ignore
    listLayer: Array<Marker> = [
        marker([-6.914744, 107.609810], {
            icon: icon({
                iconSize: [20, 20],
                iconUrl: 'assets/markers/red.png',
            }),
        }),
        marker([-6.914744, 107.213], {
            icon: icon({
                iconSize: [20, 20],
                iconUrl: 'assets/markers/red.png',
            }),
        }),
        marker([-6.914744, 107.603459810], {
            icon: icon({
                iconSize: [20, 20],
                iconUrl: 'assets/markers/red.png',
            }),
        }), marker([-6.914744, 107.345435], {
            icon: icon({
                iconSize: [20, 20],
                iconUrl: 'assets/markers/red.png',
            }),
        })
    ];

    // tslint:disable-next-line:variable-name
    constructor(private appService: AppService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        const source = new EventSource('http://localhost:8080/stream');
        source.addEventListener('message', message => {
            const listLocationModel: Array<LocationModel> = locationModelFromEventSource(message);
            this.listLayer = markerListFromLocationModel(listLocationModel);
        });
    }

}
