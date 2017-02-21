import {Component, Input} from '@angular/core';

@Component({
  selector: 'control-properties-editor',
  templateUrl: './control-properties-editor.component.html',
  styleUrls: ['./control-properties-editor.component.scss']
})
export class ControlPropertiesEditor {

  @Input()
  public target;

  ngAfterViewInit () {
    setInterval(() => {
      console.log(this.target);
    }, 1000);
  }
}