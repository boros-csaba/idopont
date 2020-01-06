import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeslot-list',
  templateUrl: 'timeslot-list.component.html',
  styleUrls: ['timeslot-list.component.css']
})
export class TimeslotListComponent {

  date: String;
  duration: number;

  @Input()
  set selectedDate(date: String) {
    this.date = date;
    this.refreshAvailableTimeslots();
  }

  @Input()
  set selectedDuration(duration: number) {
    this.duration = duration;
    this.refreshAvailableTimeslots();
  }

  refreshAvailableTimeslots() {
    if (this.date && this.duration) {
      //todo get all appointments by date and duration
    }
  }

}