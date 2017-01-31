import {Component, Input} from '@angular/core';

interface IComponent {}

@Component({
  selector: 'block-component',
  template: '{{config.name}}'
})
export class BlockComponent implements IComponent {
  @Input() config;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private components: Array<Object> = [];

  constructor() {
    this.components.push(
      {
          name: "Button"
      },
      {
          name: ""
      }
    );
  }
}
