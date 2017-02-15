import {
  Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, Input, ChangeDetectorRef, SimpleChanges, ComponentRef
} from '@angular/core';

import { BlockButton } from '../block-components/button/button.component';
import {ContainerService} from './container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit {

  private component: ComponentRef<BlockButton>;

  @ViewChild('container', { read: ViewContainerRef })
  public componentsContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private containerService: ContainerService
  ) {}

  public ngAfterViewInit(): void {
    let componentFactory = this.resolver.resolveComponentFactory(BlockButton);
    this.component = this.componentsContainer.createComponent(componentFactory);

    this.component.instance.onEvent.subscribe((eventData) => {
      console.log(eventData);
    });

    this.containerService.getConfig().subscribe((data) => {
      console.log(data);
      this.component.instance.config = data;
      this.cdRef.detectChanges();
    });
  }

}
