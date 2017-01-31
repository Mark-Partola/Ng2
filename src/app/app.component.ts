import {Component, Input} from '@angular/core';

@Component({
  selector: 'block-component',
  template: `
    <button *ngIf="config.type == 'button'">{{config.text}}</button>
    <div *ngIf="config.type == 'div'">{{config.text}}</div>
  `
})
export class BlockComponent {
  @Input() config: {type: string};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private components: Array<Object> = [];

  constructor() {
    this.components.push(
      {
          type: 'button',
          text: 'Кнопка',
          width: 100,
          height: 50
      },
      {
          type: 'div',
          text: 'Блок'
      }
    );
  }
}
