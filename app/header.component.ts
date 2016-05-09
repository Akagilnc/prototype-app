import {Component} from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="row header">
      <div class="col-md-3">
        <div class="logo">Listen&Learn</div>
      </div>
      <div class="col-md-9">
        <div class='timer pull-right'>
          <i class="fa fa-clock-o"></i>&nbsp;30
        </div>
      </div>
    </div>
  `,
  styles:[
    `.header {
        margin-top: 1em;
        margin-bottom: 2em;
      }

      .logo {
        font-size: 2em;
        font-weight: bolder;
      }

      .timer {
        margin-top: 5px;
        font-size: 1.5em;
      }`
  ]
})
export class HeaderComponent {

}