import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

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

  private subject$ = new Subject();

  public patch (piece) {
    debugger;
  }

  public update (config) {
    this.subject$.next(config);
  }

  public getStream () {
    return this.subject$;
  }
}
