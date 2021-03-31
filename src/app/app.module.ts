import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrestaComponent } from './presta/presta.component';
import { ReaComponent } from './rea/rea.component';
import  {HttpClientModule} from "@angular/common/http";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { AccueilComponent } from './accueil/accueil.component';
import {ButtonsModule, CardsModule, WavesModule} from "angular-bootstrap-md";
import { ContactComponent } from './contact/contact.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ContactsrvService} from "./contactsrv.service";

@NgModule({
  declarations: [
    AppComponent,
    PrestaComponent,
    ReaComponent,

    AccueilComponent,
    ContactComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CardsModule,
    ButtonsModule,
    WavesModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [
    ContactsrvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
