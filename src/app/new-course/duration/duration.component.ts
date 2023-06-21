import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {

  @Input() duration!: number;

  @Output() durationChange = new EventEmitter<number>();
 
  changeDuration() {
    this.durationChange.emit(this.duration);
  }

}
