import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabRoutingModule } from './modules/rooting/app-routing.module';
import { PublicLabModule } from './modules/public/app-public-lab.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LabRoutingModule,
    PublicLabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
