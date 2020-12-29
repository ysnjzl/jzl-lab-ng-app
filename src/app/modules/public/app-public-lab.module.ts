import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatTabsModule } from '@angular/material/tabs';

import { PublicHeaderComponent } from 'src/app/components/public/public-header/public-header.component';
import { PublicFooterComponent } from 'src/app/components/public/public-footer/public-footer.component';
import { PublicHomeComponent } from 'src/app/components/public/public-home/public-home.component';
import { PublicServicesComponent } from 'src/app/components/public/public-services/public-services.component';
import { PublicContactComponent } from 'src/app/components/public/public-contact/public-contact.component';
import { PublicAccountComponent } from 'src/app/components/public/public-account/public-account.component';
import { PublicAccountSignInComponent } from 'src/app/components/public/public-account/public-account-sign-in/public-account-sign-in.component';
import { PublicAccountSignUpComponent } from 'src/app/components/public/public-account/public-account-sign-up/public-account-sign-up.component';
import { PublicNotFound } from 'src/app/components/public/public-not-found/public-not-found.component';

@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicHomeComponent,
    PublicServicesComponent,
    PublicContactComponent,
    PublicAccountComponent,
    PublicAccountSignInComponent,
    PublicAccountSignUpComponent,
    PublicNotFound
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicHomeComponent,
    PublicServicesComponent,
    PublicContactComponent,
    PublicAccountComponent
  ],
  imports: [
    FontAwesomeModule,
    MatTabsModule
  ]
})
export class PublicLabModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas);
  }
 }
