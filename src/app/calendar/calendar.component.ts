import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css']
})
export class CalendarComponent implements OnInit {

  year = 2020;
  month = "Január";
  daysInMonth: number[][];
  currentDay = 7;
  selectedDay = 23;

  constructor() {
    this.daysInMonth = [[null, null, 1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, null, null]];
  }

  ngOnInit() {
    
  }

  onDaySelected(day: number) {
    this.selectedDay = day;
  }

}