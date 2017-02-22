import {Component, Input} from '@angular/core';
import {ContainerService} from "../container/container.service";

@Component({
  selector: 'control-properties-editor',
  templateUrl: './control-properties-editor.component.html',
  styleUrls: ['./control-properties-editor.component.scss']
})
export class ControlPropertiesEditor {

  constructor (private configService: ContainerService) {}

  @Input()
  public set target (config) {
    if (typeof config === 'object') {
      this.id = config.id;
      this.properties = config.properties;
    }
  };

  public id: string | number;
  public properties = {};

  public onPropertyChange (prop, value) {
    this.properties[prop] = value;
    this.configService.for(this.id).next(this.properties);
  }
}
