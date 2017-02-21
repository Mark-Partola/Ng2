import {Component, Input} from '@angular/core';

@Component({
  selector: 'control-panel-block',
  templateUrl: './control-panel-block.component.html',
  styleUrls: ['./control-panel-block.component.scss']
})
export class ControlPanelBlock {

  @Input()
  public blocks;
}
