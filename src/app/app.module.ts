import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatDividerModule, MatFormField, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSlider, MatSlideToggleModule,
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
import {ProcessesInfosComponent} from './processinfos/app-processes-infos';
import {MissingSocialComponent} from './missingSocial/missingSocial.component';
import {FormsModule} from '@angular/forms';
import {UIActionsService} from './ui.actions.service';
import {ColumnsChooserComponent} from './columns-chooser/columns-chooser.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptokpisComponent,
    GlobalkpisComponent,
    MissingSocialComponent,
    ProcessesInfosComponent,
    ColumnsChooserComponent
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
    MatProgressSpinnerModule,
    MatChipsModule,
    FormsModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  entryComponents: [
    ProcessesInfosComponent, ColumnsChooserComponent
  ],
  exports: [
    ProcessesInfosComponent, ColumnsChooserComponent
  ],
  providers: [ApiService, MatDialogModule, UIActionsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
