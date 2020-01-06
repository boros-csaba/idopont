import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-selector',
  templateUrl: 'duration-selector.component.html',
  styleUrls: ['duration-selector.component.css']
})
export class DurationSelectorComponent implements OnInit {

  selectedDuration = 1;

  @Output()
  selectedDurationUpdated = new EventEmitter<number>();

  ngOnInit() {
    this.onDurationSelected(this.selectedDuration);
  }


  onDurationSelected(duration: number) {
    this.selectedDuration = duration;
    this.selectedDurationUpdated.next(duration);
  }

}