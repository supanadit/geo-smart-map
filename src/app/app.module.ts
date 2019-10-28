import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppService } from './app.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LeafletModule.forRoot(),
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot()
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
