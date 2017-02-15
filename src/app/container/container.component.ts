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

  private componentMap = {
    button: BlockButton,
    panel: BlockPanel
  };

  @ViewChild('container', { read: ViewContainerRef })
  public componentsContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private containerService: ContainerService
  ) {}

  public ngAfterViewInit(): void {
    this.containerService.getUpdateStream().subscribe((updateStreamData: ConfigStream) => {
      console.log(updateStreamData);
      this.createComponent(updateStreamData.stream$);
    });
  }

  /**
   * TODO: Сделать проверку созданности по айди.
   */
  private createComponent(config$) {

    let created = false;
    let component;

    const createIfNotExist = type => {
      if (!created) {
        const componentFactory = this.resolver.resolveComponentFactory(this.componentMap[type]);
        component = this.componentsContainer.createComponent(componentFactory) as ComponentRef<BaseBlock>;
        component.instance.onEvent.subscribe(eventData => console.log(eventData));
        created = true;
      }
    }

    config$.subscribe(data => {
      if (!data) {
        return;
      }

      createIfNotExist(data.type);

      component.instance.config = data;
      this.cdRef.detectChanges();

    });
  }

}
