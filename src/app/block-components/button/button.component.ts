import {Component, Input, Output, EventEmitter} from '@angular/core';
import {config} from './config';

@Component({
  selector: 'block-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class BlockButton {

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
