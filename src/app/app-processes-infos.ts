import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from './api.service';
import {ProcessesInfos} from './models/processes-infos.model';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './app-processes-infos.html'
})
export class ProcessesInfosComponent implements OnInit {

  runningProcesses: ProcessesInfos[] = [];
  successProcesses: ProcessesInfos[] = [];
  errorProcesses: ProcessesInfos[] = [];
  running_loaded: boolean;
  error_loaded: boolean;
  success_loaded: boolean;

  constructor(private apiService: ApiService,
              private matDialogRef: MatDialogRef<ProcessesInfosComponent>) {
    this.running_loaded = false;
  }

  ngOnInit(): void {
    this.apiService.getProcessesInfos()
      .then(processes => {
        this.runningProcesses = processes;
        this.running_loaded = true;
      });

    this.apiService.getProcessesInfos('/SUCCESS')
      .then(processes => {
        this.successProcesses = processes;
        this.success_loaded = true;
      });

    this.apiService.getProcessesInfos('/ERROR')
      .then(processes => {
        this.errorProcesses = processes;
        this.error_loaded = true;
      });
  }
}
