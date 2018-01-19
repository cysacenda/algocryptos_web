import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import { CryptokpisComponent } from './cryptokpis/cryptokpis.component';
import { GlobalkpisComponent } from './globalkpis/globalkpis.component';
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptokpisComponent,
    GlobalkpisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
