import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PublicHeaderComponent } from 'src/app/components/public/public-header/public-header.component';
import { PublicFooterComponent } from 'src/app/components/public/public-footer/public-footer.component';
import { PublicHomeComponent } from 'src/app/components/public/public-home/public-home.component';
import { PublicServicesComponent } from 'src/app/components/public/public-services/public-services.component';
import { PublicContactComponent } from 'src/app/components/public/public-contact/public-contact.component';
import { PublicAccountComponent } from 'src/app/components/public/public-account/public-account.component';

@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    PublicHomeComponent,
    PublicServicesComponent,
    PublicContactComponent,
    PublicAccountComponent
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
    FontAwesomeModule
  ]
})
export class PublicLabModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas);
  }
 }
