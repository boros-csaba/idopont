import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';
import { TimeslotListComponent } from './timeslot-list/timeslot-list.component';

import { AppointmentService } from './appointment-service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    CalendarComponent,
    DurationSelectorComponent,
    TimeslotListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ AppointmentService ]
})
export class AppModule { }
