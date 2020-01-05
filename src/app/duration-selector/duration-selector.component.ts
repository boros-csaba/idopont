import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-selector',
  templateUrl: 'duration-selector.component.html',
  styleUrls: ['duration-selector.component.css']
})
export class DurationSelectorComponent {

  selectedDuration = 1;

  onDurationSelected(duration: number) {
    this.selectedDuration = duration;
  }

}