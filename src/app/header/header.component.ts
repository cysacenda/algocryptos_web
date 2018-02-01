import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProcessesInfosComponent} from '../app-processes-infos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public processesStatus() {
    const dialogRef = this.dialog.open(ProcessesInfosComponent, {
      height: '450px',
      width: '500px'
    });
  }
}
