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
        width: 0,
        height: 0,
        title: 'Панель'
      },
      {
        type: 'button',
        width: 0,
        height: 0,
        title: 'Кнопка'
      }
    ]);
  }
}
