import {Component, Input, Output, EventEmitter} from '@angular/core';
import {config} from './config';

@Component({
  selector: 'block-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class BlockPanel {

  @Input()
  public id;

  @Input()
  public config;

  @Output()
  public onEvent = new EventEmitter();

  public onClick() {
    this.onEvent.next({
      id: this.id,
      properties: Object.assign({}, config, this.config)
    });
  }
}
