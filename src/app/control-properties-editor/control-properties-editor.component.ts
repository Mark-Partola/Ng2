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
      this.setProps(config.properties);

      this.updateByConfigChanging(this.id);
    }
  };

  public id: string | number;
  public properties = {};

  public onPropertyChange (prop, value) {
    this.properties[prop] = value;
    this.configService.for(this.id).next(this.properties);
  }

  private updateByConfigChanging (configId) {
    this.configService.for(configId).subscribe(newConfig => {
      this.setProps(newConfig);
    });
  }

  private setProps (config) {
    this.properties = Object.entries(config)
      .sort((a, b) => (a[0] > b[0]) ? 1 : (a[0] < b[0]) ? -1 : 0)
      .reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
      }, {});
  }
}
