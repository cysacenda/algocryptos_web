import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatFormField, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { CryptokpisComponent } from './cryptokpis/cryptokpis.component';
import { GlobalkpisComponent } from './globalkpis/globalkpis.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';
import {ProcessesInfosComponent} from './app-processes-infos';
import {MissingSocialComponent} from './missingSocial/missingSocial.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptokpisComponent,
    GlobalkpisComponent,
    MissingSocialComponent,
    ProcessesInfosComponent
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
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    ProcessesInfosComponent
  ],
  exports: [
    ProcessesInfosComponent
  ],
  providers: [ApiService, MatDialogModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
