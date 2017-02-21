import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlockButton } from './block-components/button/button.component';
import { BlockPanel } from './block-components/panel/panel.component';
import { ControlPanelBlock } from './control-panel-block/control-panel-block.component';

import { ContainerComponent } from './container/container.component';
import { ContainerService } from './container/container.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockButton,
    BlockPanel,
    ContainerComponent,
    ControlPanelBlock
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent],
  entryComponents: [BlockButton, BlockPanel]
})
export class AppModule { }
