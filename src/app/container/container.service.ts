import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ContainerService {

  private streams = {};
  private update$ = new Subject<ConfigStream>();

  public for(id) {
    if (!this.streams[id]) {
      this.streams[id] = new Subject();
      this.update$.next({
        id: id,
        stream$: this.streams[id]
      });
    }

    return this.streams[id];
  }

  public getUpdateStream() {
    return this.update$;
  }d
}
