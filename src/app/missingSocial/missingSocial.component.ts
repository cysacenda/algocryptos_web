import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {MissingSocial} from '../models/missing-social.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-missing-reddit',
  templateUrl: './missingSocial.component.html',
  styleUrls: ['./missingSocial.component.css']
})
export class MissingSocialComponent implements OnInit, AfterViewInit {
  missingSocial: MissingSocial [];
  displayedColumns = ['IdCryptoCompare', 'Name', 'CoinName', 'Reddit_name'];

  dataSource: MatTableDataSource<MissingSocial>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  updateSubreddit(idCryptoCompare, subredditName): void {

    if (subredditName != null && idCryptoCompare != null) {
      const bodyData = {
        IdCoinCryptoCompare: idCryptoCompare,
        Reddit_name: subredditName
      };

      this.apiService.setMissingSocialReddit(bodyData)
        .then(response => {
          if (response.IdCoinCryptoCompare === idCryptoCompare) {
            alert(response.Reddit_name + ' has been added');
          }
          // alert(subredditName + ' has been added');
          this.apiService.getMissingSocial()
            .then(missingSocial => {
              this.missingSocial = missingSocial;
              this.dataSource = new MatTableDataSource<MissingSocial>(this.missingSocial);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
        });
    } else {
      alert('Subreddit is empty');
    }
  }


  ngOnInit() {
    this.apiService.getMissingSocial()
      .then(missingSocial => {
        this.missingSocial = missingSocial;
        console.log(missingSocial);
        this.dataSource = new MatTableDataSource<MissingSocial>(this.missingSocial);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
  }

}
