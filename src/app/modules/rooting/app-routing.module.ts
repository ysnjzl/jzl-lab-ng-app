import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicAccountComponent } from "src/app/components/public/public-account/public-account.component";
import { PublicContactComponent } from "src/app/components/public/public-contact/public-contact.component";
import { PublicHomeComponent } from "src/app/components/public/public-home/public-home.component";
import { PublicServicesComponent } from "src/app/components/public/public-services/public-services.component";

const labRoutes: Routes = [
  { path: "", component: PublicHomeComponent },
  { path: "services", component: PublicServicesComponent },
  { path: "contact", component: PublicContactComponent },
  { path: "account", component: PublicAccountComponent }
];

@NgModule({
imports: [
  RouterModule.forRoot(labRoutes)
],
exports: [RouterModule]
})
export class LabRoutingModule {

}