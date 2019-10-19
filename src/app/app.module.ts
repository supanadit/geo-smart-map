import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppService } from './app.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config: SocketIoConfig = {
    url: 'http://localhost:8080', options: {}
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LeafletModule.forRoot(),
        SocketIoModule.forRoot(config),
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot()
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
