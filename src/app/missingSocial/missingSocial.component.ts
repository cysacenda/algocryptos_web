import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {MissingSocial} from '../models/missing-social.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-missing-reddit',
  templateUrl: './missingSocial.component.html',
  styleUrls: ['./missingSocial.component.scss']
})
export class MissingSocialComponent implements OnInit, AfterViewInit {
  missingSocial: MissingSocial [];
  displayedColumns = ['id_cryptocompare', 'crypto_name', 'coin_name', 'reddit_name_manual', 'facebook_link_manual' , 'twitter_link_manual', 'update'];

  dataSource: MatTableDataSource<MissingSocial>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  updateSubreddit(id_cryptocompare, subredditName, twitterLink, facebookLink): void {

    if (subredditName ===  '') {
      subredditName = null;
    }
    if (twitterLink === '') {
      twitterLink = null;
    }
    if (facebookLink === '') {
      facebookLink = null;
    }

    if (id_cryptocompare != null) {
      const bodyData = {
        id_cryptocompare: id_cryptocompare,
        reddit_name: subredditName,
        twitter_link: twitterLink,
        facebook_link: facebookLink
      };

      if (subredditName == null) {
        alert ('Cannot update if subreddit is empty');
      } else {
        this.apiService.setMissingSocialReddit(bodyData)
          .then(response => {
            if (response.id_cryptocompare === id_cryptocompare) {
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
        for(const crypto in missingSocial) {

          if (missingSocial[crypto].facebook_link != null) {
            const facebook_link_length = missingSocial[crypto].facebook_link.length - 26;
            // missingSocial[crypto].Facebook_link = missingSocial[crypto].Facebook_link.substr(25, facebook_link_length);
            missingSocial[crypto].facebook_link_manual = missingSocial[crypto].facebook_link.substr(25, facebook_link_length);
          }
          if (missingSocial[crypto].twitter_link != null) {
            const twitter_link_length = missingSocial[crypto].twitter_link.length - 20;
            // missingSocial[crypto].Twitter_link = missingSocial[crypto].Twitter_link.substr(20, twitter_link_length);
            missingSocial[crypto].twitter_link_manual = missingSocial[crypto].twitter_link.substr(20, twitter_link_length);
          }
          if (missingSocial[crypto].reddit_name_manual == null) {
            missingSocial[crypto].reddit_name_manual = missingSocial[crypto].reddit_name;
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
