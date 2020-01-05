import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    CalendarComponent,
    DurationSelectorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
