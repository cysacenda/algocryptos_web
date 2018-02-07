import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Coins} from './models/coins.model';
import {ProcessesInfos} from "./models/processes-infos.model";
import {MissingReddit} from './models/missing-reddit.model';

@Injectable()
export class ApiService {
  private basicURL: string = environment.apiUrl;

  // URL to web api
  private coinsUrl: string = this.basicURL + environment.coinsUrl;
  private processesInfosUrl: string = this.basicURL + environment.processesInfosUrl;
  private missingRedditUrl: string = this.basicURL + environment.missingRedditUrl;

  constructor(private http: HttpClient) { }

  public getCoins(): Promise<Array<Coins>> {
    return this.http
      .get(this.coinsUrl)
      .toPromise()
      .then((response) => {
        return response as Coins[];
      })
      .catch(this.handleError);
  }

  public getProcessesInfos(): Promise<Array<ProcessesInfos>> {
    return this.http
      .get(this.processesInfosUrl)
      .toPromise()
      .then((response) => {
        return response as ProcessesInfos[];
      })
      .catch(this.handleError);
  }

  public getMissingReddit(): Promise<Array<MissingReddit>> {
    return this.http
      .get(this.missingRedditUrl)
      .toPromise()
      .then((response) => {
        return response as Coins[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
