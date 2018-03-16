import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../api.service';
import {Coins} from '../models/coins.model';
import { CurrencyPipe } from '@angular/common';
import {HeaderAction, UIActionsService} from '../ui.actions.service';
import {Subscription} from 'rxjs/Subscription';
import {ProcessesInfosComponent} from "../processinfos/app-processes-infos";
import {ColumnsChooserComponent} from "../columns-chooser/columns-chooser.component";

@Component({
  selector: 'app-cryptokpis',
  templateUrl: './cryptokpis.component.html',
  styleUrls: ['./cryptokpis.component.scss']
})
export class CryptokpisComponent implements OnInit, AfterViewInit {
  coins: Coins [];
  displayedColumns = [];

  dataSource: MatTableDataSource<Coins>;

  HeaderSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, private uiActionsService: UIActionsService, public dialog: MatDialog,) {
    this.HeaderSubscription = uiActionsService.actionTriggered$.subscribe(
      action => {
        this.headerAction(action);
      }
    );
  }

  ngOnInit() {
    this.getCoins();
    this.displayedColumns = this.apiService.getVisibleGridColumns();
  }

  headerAction(action) {
    if (action === HeaderAction.Refresh) {
      if (this.coins != null) {
        this.dataSource = null;
        this.coins = undefined;
      }
      this.getCoins();
    } else if(action === HeaderAction.Alerts) {
        // TODO
    }
  }

  getCoins() {
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

  setColor(percent: number): string {
    return percent >= 0 ? 'LimeGreen' : 'Red';
  }

  editColumns(){
    const dialogRef = this.dialog.open(ColumnsChooserComponent, {
      height: '600px',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.displayedColumns = this.apiService.getVisibleGridColumns();
    });
  }
}

