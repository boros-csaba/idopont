import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  selectedDate: String;
  selectedDuration: number;

  updateSelectedDate(date: String) {
    this.selectedDate = date;
  }

  updateSelectedDuration(duration: number) {
    this.selectedDuration = duration;
  }
}
