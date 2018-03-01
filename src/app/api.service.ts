import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Coins} from './models/coins.model';
import {ProcessesInfos} from './models/processes-infos.model';
import {MissingSocial} from './models/missing-social.model';
import {Globaldata} from "./models/globaldata.model";

@Injectable()
export class ApiService {
  private basicURL: string = environment.apiUrl;

  // URL to web api
  private coinsUrl: string = this.basicURL + environment.coinsUrl;
  private processesInfosUrl: string = this.basicURL + environment.processesInfosUrl;
  private missingSocialUrl: string = this.basicURL + environment.missingSocialUrl;
  private globaldataUrl: string = this.basicURL + environment.globaldataUrl;
  private visibleGridColumns: String[];

  constructor(private http: HttpClient) {
    this.visibleGridColumns = ['rank', 'CoinName', 'Symbol', 'price_usd', 'market_cap_usd', 'percent_change_1h',
      'percent_change_24h', 'percent_change_7d', 'percent_change_ath', 'reddit_subscribers',
      'subscribers_1d_trend',  'subscribers_3d_trend', 'subscribers_7d_trend',
      'subscribers_15d_trend', 'subscribers_30d_trend', 'subscribers_60d_trend',
      'subscribers_90d_trend', 'volume_mean_last_1h_vs_30d', 'volume_mean_last_3h_30d',
      'volume_mean_last_6h_30d', 'volume_mean_last_12h_30d', 'volume_mean_last_24h_30d']
  }

  public getCoins(): Promise<Array<Coins>> {
    return this.http
      .get(this.coinsUrl)
      .toPromise()
      .then((response) => {
        return response as Coins[];
      })
      .catch(this.handleError);
  }

  public getProcessesInfos(status= ''): Promise<Array<ProcessesInfos>> {
    return this.http
      .get(this.processesInfosUrl + status)
      .toPromise()
      .then((response) => {
        return response as ProcessesInfos[];
      })
      .catch(this.handleError);
  }

  public getMissingSocial(): Promise<Array<MissingSocial>> {
    return this.http
      .get(this.missingSocialUrl)
      .toPromise()
      .then((response) => {
        return response as Coins[];
      })
      .catch(this.handleError);
  }

  public setMissingSocialReddit(bodyData): Promise<any> {
    return this.http
      .post(this.missingSocialUrl, JSON.stringify(bodyData), {headers:{'Content-Type': 'application/json'}})
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  public getGlobalData(): Promise<Globaldata> {
    return this.http
      .get(this.globaldataUrl)
      .toPromise()
      .then((response) => {
        return (response)[0] as Globaldata;
      })
      .catch(this.handleError);
  }

  public getGridColumns() : String[] {
    return ['rank', 'CoinName', 'Symbol', 'price_usd', 'market_cap_usd', 'percent_change_1h',
      'percent_change_24h', 'percent_change_7d', 'percent_change_ath', 'reddit_subscribers',
      'subscribers_1d_trend',  'subscribers_3d_trend', 'subscribers_7d_trend',
      'subscribers_15d_trend', 'subscribers_30d_trend', 'subscribers_60d_trend',
      'subscribers_90d_trend', 'volume_mean_last_1h_vs_30d', 'volume_mean_last_3h_30d',
      'volume_mean_last_6h_30d', 'volume_mean_last_12h_30d', 'volume_mean_last_24h_30d',
      'volume_mean_last_3d_30d', 'volume_mean_last_7d_30d'];
  }

  public getVisibleGridColumns() : String[] {
    return this.visibleGridColumns;
  }

  public setVisibleGridColumns(columns: String[]) {
    this.visibleGridColumns = columns;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
