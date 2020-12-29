import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabRoutingModule } from './modules/rooting/app-routing.module';
import { PublicLabModule } from './modules/public/app-public-lab.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PublicAccountSignInComponent } from './components/public/public-account/public-account-sign-in/public-account-sign-in.component';
import { PublicAccountSignUpComponent } from './components/public/public-account/public-account-sign-up/public-account-sign-up.component';
import { PublicErrorPageComponent } from './components/public/public-error-page/public-error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicAccountSignInComponent,
    PublicAccountSignUpComponent,
    PublicErrorPageComponent
  ],
  imports: [
    BrowserModule,
    LabRoutingModule,
    PublicLabModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
