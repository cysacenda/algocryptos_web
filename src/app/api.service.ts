import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Coins} from './models/coins.model';
import {ProcessesInfos} from "./models/processes-infos.model";
import {MissingSocial} from './models/missing-social.model';

@Injectable()
export class ApiService {
  private basicURL: string = environment.apiUrl;

  // URL to web api
  private coinsUrl: string = this.basicURL + environment.coinsUrl;
  private processesInfosUrl: string = this.basicURL + environment.processesInfosUrl;
  private missingSocialUrl: string = this.basicURL + environment.missingSocialUrl;

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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
