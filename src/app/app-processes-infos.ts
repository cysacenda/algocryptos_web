import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from './api.service';
import {ProcessesInfos} from './models/processes-infos.model';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './app-processes-infos.html'
})
export class ProcessesInfosComponent implements OnInit {

  processes: ProcessesInfos[] = [];
  loaded: boolean;

  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<ProcessesInfosComponent>) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.apiService.getProcessesInfos()
      .then(processes => {
        this.processes = processes;
        this.loaded = true;
      });
  }
}
