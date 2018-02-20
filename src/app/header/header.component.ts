import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ProcessesInfosComponent} from '../app-processes-infos';
import {ApiService} from '../api.service';
import {Globaldata} from '../models/globaldata.model';
import {HeaderAction, UIActionsService} from '../ui.actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  globaldata: Globaldata;

  constructor(public dialog: MatDialog, private apiService: ApiService, private uiActionsService: UIActionsService) { }

  ngOnInit() {
    this.loadGlobalData();
  }

  loadGlobalData() {
    this.apiService.getGlobalData()
      .then(globaldata => {
        this.globaldata = globaldata;
      });
  }

  public processesStatus() {
    const dialogRef = this.dialog.open(ProcessesInfosComponent, {
      height: '600px',
      width: '700px'
    });
  }

  refreshData() {
    this.uiActionsService.actionTriggered(HeaderAction.Refresh);
    this.loadGlobalData();
  }
}
