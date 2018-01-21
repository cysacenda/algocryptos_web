import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatFormField, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { CryptokpisComponent } from './cryptokpis/cryptokpis.component';
import { GlobalkpisComponent } from './globalkpis/globalkpis.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptokpisComponent,
    GlobalkpisComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
