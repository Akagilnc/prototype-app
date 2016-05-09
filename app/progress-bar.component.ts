import {Component} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
  <div class='row'>
    <div class='col-md-12'>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
          <span class="sr-only">60% Complete</span>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ProgressBarComponent {

}