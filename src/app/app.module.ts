import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrganizationGetComponent } from './components/organization-get/organization-get.component';
import { MainComponent } from './components/main/main.component';
import { OrganizationAddComponent } from './components/organization-add/organization-add.component';
import { OrganizationEditComponent } from './components/organization-edit/organization-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationGetComponent,
    MainComponent,
    OrganizationAddComponent,
    OrganizationEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
