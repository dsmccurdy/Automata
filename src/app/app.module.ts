import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LadderViewComponent } from '../ladder/ladder-view/ladder-view.component'
import { LadderService } from '../ladder/ladder.service';

@NgModule({
  declarations: [
    AppComponent,
    LadderViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ LadderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
