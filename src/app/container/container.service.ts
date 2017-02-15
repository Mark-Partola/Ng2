import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ContainerService {

  private config$;

  constructor() {
    this.config$ = new BehaviorSubject<any>({
      width: 0,
      height: 0,
      title: 'Button'
    });
  }

  getConfig() {
    return this.config$;
  }

}
