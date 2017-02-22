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

    /**
     * TODO: Изменять только значения. На текущий момент перезаписывается весь конфиг. Из-то чего теряется фокус.
     */
    /**
     * TODO: Подумать над отправкой патча конфига, а не всего сразу при каждом изменении.
     */
    this.configService.for(this.id).patch({[prop]: value});
  }

  private updateByConfigChanging (configId) {
    this.configService.for(configId).getStream().subscribe(newConfig => {
      this.setProps(newConfig);
    });
  }

  private setProps (config) {
    const oldProps = this.properties;
    const newProps = Object.entries(config)
      .sort((a, b) => (a[0] > b[0]) ? 1 : (a[0] < b[0]) ? -1 : 0)
      .reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
      }, {});

    this.properties = newProps;
  }
}
