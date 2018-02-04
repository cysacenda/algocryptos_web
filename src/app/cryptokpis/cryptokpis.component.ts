import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../api.service';
import {Coins} from '../models/coins.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cryptokpis',
  templateUrl: './cryptokpis.component.html',
  styleUrls: ['./cryptokpis.component.css']
})
export class CryptokpisComponent implements OnInit, AfterViewInit {
  coins: Coins [];
  displayedColumns = ['rank', 'CoinName', 'Symbol', 'price_usd', 'market_cap_usd', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'prices_ath_usd', 'ath_date', 'percent_change_ath', 'reddit_subscribers', 'subscribers_1d_trend',  'subscribers_3d_trend', 'subscribers_7d_trend', 'subscribers_15d_trend', 'subscribers_30d_trend', 'subscribers_60d_trend', 'subscribers_90d_trend'];

  dataSource: MatTableDataSource<Coins>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCoins()
      .then(coins => {
        this.coins = coins;
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource<Coins>(this.coins);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setColor(percent: number) : string {
    return percent >= 0 ? 'LimeGreen' : 'Red';
  }
}

