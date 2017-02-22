import {Component, AfterViewInit} from '@angular/core';
import {ContainerService} from './container/container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private configService: ContainerService) {}

  public blocks = [
    {
      component: 'button',
      title: 'Кнопка'
    },
    {
      component: 'panel',
      title: 'Панель'
    }
  ];

  public targetConfig;

  public ngAfterViewInit() {
    this.configService.for('button').next({
      type: 'button',
      styles: {
        width: '200px',
        height: '100px'
      },
      title: 'Кнопка'
    });

    setTimeout(() => {
      this.configService.for('panel').next({
        type: 'button',
        styles: {
          width: '200px',
          height: '100px'
        },
        title: 'Кнопка'
      });
    }, 5000);

    setTimeout(() => {
      this.configService.for('button').next({
        type: 'button',
        styles: {
          width: '200px',
          height: '100px'
        },
        title: 'Новое название',
        width: 100,
        height: 200,
        top: 10,
        left: 20
      });
    }, 5000);
  }

  public onComponentChoose (type) {
    this.configService.for(Date.now()).next({
      type: type,
      styles: {
        width: '50px',
        height: '20px'
      },
      title: type
    });
  }

  public onControlPoint (config) {
    this.targetConfig = config;
  }
}
