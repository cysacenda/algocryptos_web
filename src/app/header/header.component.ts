import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ProcessesInfosComponent} from '../processinfos/app-processes-infos';
import {ApiService} from '../api.service';
import {Globaldata} from '../models/globaldata.model';
import {HeaderAction, UIActionsService} from '../ui.actions.service';
import {GlobalVolumesKpiComponent} from "../global-volumes-kpi/global-volumes-kpi.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

  public volumesKPI() {
    const dialogRef = this.dialog.open(GlobalVolumesKpiComponent, {
      height: '300px',
      width: '250px'
    });
    dialogRef.componentInstance.globaldata = this.globaldata;
  }

  refreshData() {
    this.uiActionsService.actionTriggered(HeaderAction.Refresh);
    this.loadGlobalData();
  }

  showAlerts() {
    this.uiActionsService.actionTriggered(HeaderAction.Alerts);
  }

  setColor(percent: number): string {
    return percent >= 0 ? 'LimeGreen' : 'Red';
  }
}
