import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'block-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class BlockPanel {

  @Input()
  public config;

  @Output()
  public onEvent = new EventEmitter();
}
