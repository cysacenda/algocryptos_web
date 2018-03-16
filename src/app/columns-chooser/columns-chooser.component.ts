import { Component, OnInit } from '@angular/core';
import {ProcessesInfosComponent} from "../processinfos/app-processes-infos";
import {MatDialogRef} from "@angular/material";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-columns-chooser',
  templateUrl: './columns-chooser.component.html',
  styleUrls: ['./columns-chooser.component.scss']
})
export class ColumnsChooserComponent implements OnInit {
  gridColumns = [];
  selectedColumns = [];
  selectedOptions: String[];

  constructor(private matDialogRef: MatDialogRef<ProcessesInfosComponent>, private apiService: ApiService) {
  }

  ngOnInit() {
    this.gridColumns = this.apiService.getGridColumns();
    this.selectedColumns = this.apiService.getVisibleGridColumns();
  }

  closeDialog() {
    this.apiService.setVisibleGridColumns(this.selectedOptions);
    this.matDialogRef.close();
  }

}
