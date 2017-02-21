import {Component, Input} from '@angular/core';

@Component({
  selector: 'control-properties-editor',
  templateUrl: './control-properties-editor.component.html',
  styleUrls: ['./control-properties-editor.component.scss']
})
export class ControlPropertiesEditor {

  @Input()
  public set target (config) {
    if (typeof config === 'object') {
      this.properties = Object.entries(config.properties);
    }

  };

  public properties = [];
}
