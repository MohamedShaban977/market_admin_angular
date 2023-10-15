import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {
  @Input() title: string = '';
  @Input() listData: any[] = [];

  @Output() selectedValue = new EventEmitter();

  detectChanges(event: any) {

    this.selectedValue.emit(event);
  }
}
