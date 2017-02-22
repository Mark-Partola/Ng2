import {
  Component, ViewContainerRef, EventEmitter, ViewChild,
  ComponentFactoryResolver, AfterViewInit, Output,
  ChangeDetectorRef, ComponentRef
} from '@angular/core';

import { BlockButton } from '../block-components/button/button.component';
import { BlockPanel } from '../block-components/panel/panel.component';
import {ContainerService} from './container.service';

type BaseBlock = {
  id: string | number,
  config: any,
  onEvent: any
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {

  @Output()
  public controlPoint = new EventEmitter<any>();

  private component: ComponentRef<any>;

  private componentMap = {
    button: BlockButton,
    panel: BlockPanel
  };

  @ViewChild('container', {
    read: ViewContainerRef
  })
  public componentsContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private containerService: ContainerService
  ) {}

  public ngAfterViewInit(): void {
    this.containerService.getStream()
      .subscribe((updateStreamData: ConfigStream) => {
        console.log(updateStreamData);
        this.createComponent(updateStreamData);
      });
  }

  /**
   * TODO: Сделать проверку созданности по айди.
   */
  private createComponent(config) {

    let created = false;
    let component;

    const createIfNotExist = (type, id) => {
      if (!created) {
        const componentFactory = this.resolver.resolveComponentFactory(this.componentMap[type]);
        component = this.componentsContainer.createComponent(componentFactory) as ComponentRef<BaseBlock>;
        component.instance.id = id;
        component.instance.onEvent.subscribe(eventData => this.controlPoint.next(eventData));
        created = true;
      }
    };

    config.stream$.subscribe(data => {
      if (!data) {
        return;
      }

      createIfNotExist(data.type, config.id);

      component.instance.config = data;
      this.cdRef.detectChanges();

    });
  }

}
