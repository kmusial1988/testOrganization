import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConferenceRoomAddComponent} from "./components/conference-room-add/conference-room-add.component";
import {ConferenceRoomEditComponent} from "./components/conference-room-edit/conference-room-edit.component";
import {ConferenceRoomGetComponent} from "./components/conference-room-get/conference-room-get.component";
import {OrganizationAddComponent} from "./components/organization-add/organization-add.component";
import {OrganizationEditComponent} from "./components/organization-edit/organization-edit.component";
import {OrganizationGetComponent} from "./components/organization-get/organization-get.component";
import {MainComponent} from "./components/main/main.component";
import {ReservationComponent} from "./components/reservation/reservation.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'room/add', component: ConferenceRoomAddComponent},
  {path: 'room/edit', component: ConferenceRoomEditComponent},
  {path: 'room/get', component: ConferenceRoomGetComponent},
  {path: 'organization/add', component: OrganizationAddComponent},
  {path: 'organization/edit', component: OrganizationEditComponent},
  {path: 'organization/get', component: OrganizationGetComponent},
  {path: 'reservation', component: ReservationComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
