import {Component, AfterViewInit} from '@angular/core';
import {ContainerService} from './container/container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private containerService: ContainerService) {}

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

  public propsEditor$;

  public ngAfterViewInit() {
    this.containerService.for('button').next({
      type: 'button',
      styles: {
        width: '200px',
        height: '100px'
      },
      title: 'Кнопка'
    });

    setTimeout(() => {
      this.containerService.for('panel').next({
        type: 'button',
        styles: {
          width: '200px',
          height: '100px'
        },
        title: 'Кнопка'
      });
    }, 5000);

    setTimeout(() => {
      this.containerService.for('button').next({
        type: 'button',
        styles: {
          width: '200px',
          height: '100px'
        },
        title: 'Новое название'
      });
    }, 5000);
  }

  public onComponentChoose (type) {
    this.containerService.for(Date.now()).next({
      type: type,
      styles: {
        width: '50px',
        height: '20px'
      },
      title: 'Кнопка'
    });
  }

  public onControlPoint (event) {
    this.propsEditor$ = this.containerService.for(event);
  }
}
