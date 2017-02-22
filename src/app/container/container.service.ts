import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ContainerService {

  private streams = {};
  private full$ = new Subject<ConfigStream>();

  public for(id) {
    if (!this.streams[id]) {
      this.streams[id] = new StreamSubject();
      this.full$.next({
        id: id,
        stream$: this.streams[id].getStream()
      });
    }

    return this.streams[id];
  }

  public getStream() {
    return this.full$;
  }
}

class StreamSubject {

  private subject$ = new BehaviorSubject(null);

  public patch (piece) {
    const value = this.subject$.value;
    Object.keys(piece).forEach(key => value[key] = piece[key]);
    this.update(value);
  }

  public update (config) {
    this.subject$.next(config);
  }

  public getStream () {
    return this.subject$;
  }
}
