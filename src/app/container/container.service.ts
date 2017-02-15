import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ContainerService {

  private config$;

  constructor() {
    this.config$ = new BehaviorSubject<any>(null);
  }

  getConfig() {
    return this.config$;
  }

}
