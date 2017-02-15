import {
  Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, Input, ChangeDetectorRef, SimpleChanges, ComponentRef
} from '@angular/core';

import { BlockButton } from '../block-components/button/button.component';
import { BlockPanel } from '../block-components/panel/panel.component';
import {ContainerService} from './container.service';
type BaseBlock = {
  config: any,
  onEvent: any
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {

  private component: ComponentRef<any>;

  @ViewChild('container', { read: ViewContainerRef })
  public componentsContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private containerService: ContainerService
  ) {}

  public ngAfterViewInit(): void {

    const componentMap = {
      button: BlockButton,
      panel: BlockPanel
    };

    this.containerService.getConfig().subscribe(data => {

      if (Object.is(data, null)) {
        return;
      } else if (!Array.isArray(data)) {
        throw new TypeError('[ComponentContainer]: Config must be an Array');
      }

      data.forEach(config => {
        console.log(config);

        const componentFactory = this.resolver.resolveComponentFactory(componentMap[config.type]);
        let component = this.componentsContainer.createComponent(componentFactory) as ComponentRef<BaseBlock>;

        component.instance.onEvent.subscribe(eventData => console.log(eventData));
        
        component.instance.config = config;
        this.cdRef.detectChanges();

      });
    });
  }

}
