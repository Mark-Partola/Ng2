import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlockButton } from './block-components/button/button.component';
import { BlockPanel } from './block-components/panel/panel.component';
import { ControlPanelBlock } from './control-panel-block/control-panel-block.component';
import { ControlPropertiesEditor } from './control-properties-editor/control-properties-editor.component';

import { ContainerComponent } from './container/container.component';
import { ContainerService } from './container/container.service';

import { ForKeysPipe } from './common/ForKeysPipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockButton,
    BlockPanel,
    ContainerComponent,
    ControlPanelBlock,
    ControlPropertiesEditor,
    ForKeysPipe
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
