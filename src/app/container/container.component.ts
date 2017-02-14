import {
  Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, Input
} from '@angular/core';

import { BlockButton } from '../block-components/button/button.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {

  @Input()
  public config;

  @ViewChild('container', { read: ViewContainerRef })
  public componentsContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngAfterViewInit(): void {
    let componentFactory = this.resolver.resolveComponentFactory(BlockButton);
    let component = this.componentsContainer.createComponent(componentFactory);

    component.instance.onEvent.subscribe((eventData) => {
      console.log('!', eventData);
    });

    component.instance.config = {
      title: 'Кнопка'
    };
  }

}
