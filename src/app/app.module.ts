import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlockButton } from './block-components/button/button.component';
import { ContainerComponent } from './container/container.component';
import { ContainerService } from './container/container.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockButton,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent],
  entryComponents: [BlockButton]
})
export class AppModule { }
