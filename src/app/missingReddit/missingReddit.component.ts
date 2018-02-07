import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {MissingReddit} from '../models/missing-reddit.model';
import {Coins} from '../models/coins.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-missing-reddit',
  templateUrl: './missingReddit.component.html',
  styleUrls: ['./missingReddit.component.css']
})
export class MissingRedditComponent implements OnInit, AfterViewInit {

  missingReddit: MissingReddit [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMissingReddit()
      .then(missingReddit => {
        this.missingReddit = missingReddit;
        console.log(missingReddit);
        // Assign the data to the data source for the table to render
        // this.dataSource = new MatTableDataSource<Coins>(this.coins);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
  }

}
