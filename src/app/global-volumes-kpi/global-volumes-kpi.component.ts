import { Component, OnInit } from '@angular/core';
import {Globaldata} from '../models/globaldata.model';

@Component({
  selector: 'app-global-volumes-kpi',
  templateUrl: './global-volumes-kpi.component.html',
  styleUrls: ['./global-volumes-kpi.component.scss']
})
export class GlobalVolumesKpiComponent implements OnInit {
  globaldata: Globaldata;

  constructor() { }

  ngOnInit() {
  }

  setColor(percent: number): string {
    return percent >= 0 ? 'LimeGreen' : 'Red';
  }

}
