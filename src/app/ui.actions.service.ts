import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UIActionsService {

  // Observable string sources
  private actionTriggeredSource = new Subject<HeaderAction>();

  // Observable string streams
  actionTriggered$ = this.actionTriggeredSource.asObservable();

  // Service message commands
  actionTriggered(action: HeaderAction) {
    this.actionTriggeredSource.next(action);
  }
}

export enum HeaderAction {
  Refresh
}
