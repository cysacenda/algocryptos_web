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
  displayedColumns = ['IdCryptoCompare', 'Name', 'CoinName', 'reddit_name_manual', 'facebook_link_manual' , 'twitter_link_manual', 'Update'];

  dataSource: MatTableDataSource<MissingSocial>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  updateSubreddit(idCryptoCompare, subredditName, twitterLink, facebookLink): void {

    if (subredditName ===  '') {
      subredditName = null;
    }
    if (twitterLink === '') {
      twitterLink = null;
    }
    if (facebookLink === '') {
      facebookLink = null;
    }

    if (idCryptoCompare != null) {
      const bodyData = {
        IdCoinCryptoCompare: idCryptoCompare,
        Reddit_name: subredditName,
        Twitter_link: twitterLink,
        Facebook_link: facebookLink
      };

      if (subredditName == null) {
        alert ('Cannot update if subreddit is empty');
      } else {
        this.apiService.setMissingSocialReddit(bodyData)
          .then(response => {
            if (response.IdCoinCryptoCompare === idCryptoCompare) {
              alert('Social infos has been updated');
            } else {
              alert(response.Error);
            }
            this.getMissingSocial();
          });
      }
    } else {
      alert ('Error');
    }
  }

  ngOnInit() {
    this.getMissingSocial();
  }

  getMissingSocial() {
    this.apiService.getMissingSocial()
      .then(missingSocial => {

        // FIXME
        // Temporary solution -> Links should be clean in the database -> No more "https://www.facebook.com/" and "https://twitter.com/"
        // From here
        for (const crypto in missingSocial) {


          if (missingSocial[crypto].Facebook_link != null) {
            const facebook_link_length = missingSocial[crypto].Facebook_link.length - 26;
            //missingSocial[crypto].Facebook_link = missingSocial[crypto].Facebook_link.substr(25, facebook_link_length);
            missingSocial[crypto].facebook_link_manual = missingSocial[crypto].Facebook_link.substr(25, facebook_link_length);
          }
          if (missingSocial[crypto].Twitter_link != null) {
            const twitter_link_length = missingSocial[crypto].Twitter_link.length - 20;
            //missingSocial[crypto].Twitter_link = missingSocial[crypto].Twitter_link.substr(20, twitter_link_length);
            missingSocial[crypto].twitter_link_manual = missingSocial[crypto].Twitter_link.substr(20, twitter_link_length);
          }
          if (missingSocial[crypto].reddit_name_manual == null) {
            missingSocial[crypto].reddit_name_manual = missingSocial[crypto].Reddit_name;
          }
        }
        // To here - Delete me when database has clean url

        this.missingSocial = missingSocial;
        this.dataSource = new MatTableDataSource<MissingSocial>(this.missingSocial);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
  }

}
