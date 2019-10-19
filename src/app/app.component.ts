import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import { AppService } from './app.service';
import { ToastrService } from 'ngx-toastr';

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

    constructor(private appService: AppService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        // this.toastr.success('Hello world!', 'Toastr fun!');
    }

}
