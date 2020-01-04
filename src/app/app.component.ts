import {Component, OnInit} from '@angular/core';
import {latLng, marker, Marker, tileLayer} from 'leaflet';
import {AppService} from './app.service';
import {ToastrService} from 'ngx-toastr';

declare const L: any;
import '@ansur/leaflet-pulse-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token = 'pk.eyJ1Ijoic3VwYW5hZGl0IiwiYSI6ImNrMmVweWdrcTA4ZzgzY3A1NDE5ZnQwazkifQ.hK2Mz6cFk-jeIHzFBdaKTg';
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

  // @ts-ignore
  listMarker: Array<Marker> = [];

  // tslint:disable-next-line:variable-name
  constructor(private appService: AppService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.appService.getStreamUser().subscribe((listMarker: Array<Marker>) => {
      this.listMarker = listMarker;
    });
  }

}
