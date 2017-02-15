import {
  Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, Input, ChangeDetectorRef, SimpleChanges, ComponentRef
} from '@angular/core';

import {Subject} from 'rxjs/Subject';

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
    this.containerService.getUpdateStream().subscribe((updateStreamData: {id: string, stream$: Subject<any>})=> {
      console.log(updateStreamData);
      this.createComponent(updateStreamData.stream$);
    });
  }

  private createComponent(config$) {

    console.log(config$);
    config$.subscribe(data => {
      if (!data) {
        return;
      }

      const componentFactory = this.resolver.resolveComponentFactory(this.componentMap[data.type]);
      let component = this.componentsContainer.createComponent(componentFactory) as ComponentRef<BaseBlock>;

      component.instance.onEvent.subscribe(eventData => console.log(eventData));

      component.instance.config = data;
      this.cdRef.detectChanges();

    });
  }

}
