import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrganizationGetComponent } from './components/organization-get/organization-get.component';
import { MainComponent } from './components/main/main.component';
import { OrganizationAddComponent } from './components/organization-add/organization-add.component';
import { OrganizationEditComponent } from './components/organization-edit/organization-edit.component';
import { ConferenceRoomEditComponent } from './components/conference-room-edit/conference-room-edit.component';
import { ConferenceRoomAddComponent } from './components/conference-room-add/conference-room-add.component';
import { ConferenceRoomGetComponent } from './components/conference-room-get/conference-room-get.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationGetComponent,
    MainComponent,
    OrganizationAddComponent,
    OrganizationEditComponent,
    ConferenceRoomEditComponent,
    ConferenceRoomAddComponent,
    ConferenceRoomGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
