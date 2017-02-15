import {Component, AfterViewInit} from '@angular/core';
import {ContainerService} from './container/container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private containerService: ContainerService) {}

  public ngAfterViewInit() {
    this.containerService.getConfig().next([
      {
        type: 'panel',
        styles: {
          width: '100px',
          height: '50px'
        },
        title: 'Панель'
      },
      {
        type: 'button',
        styles: {
          width: '200px',
          height: '100px'
        },
        title: 'Кнопка'
      }
    ]);
  }
}
