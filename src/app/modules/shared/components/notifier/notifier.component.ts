import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent {

  constructor(private toaster: ToastrService) { }


  showSuccess() {
    this.toaster.success('aaaa');
  }

}
