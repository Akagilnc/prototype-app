import {Component, Input} from '@angular/core';
import {IQuestion} from './all.interface';

@Component({
  selector: 'answer',
  template:`
  <div class='row answer-row'>
    <div class='col-md-3'>
      <div class='answer-title'>Answer:</div>
    </div>
    <div class='col-md-9'>
      <div class='answer-placeholder'></div>
      <i class='fa fa-times fa-2x'></i>
    </div>
  </div>

  <div class='row keyboard-row'>
    <div class='col-md-12'>
      <div class="row keyboard">
        <div class="col-md-12 keyboard-line">
          <span class="key">A</span>
          <span class="key">B</span>
          <span class="key">C</span>
          <span class="key">D</span>
          <span class="key">E</span>
          <span class="key">F</span>
          <span class="key">G</span>

        </div>
        <div class="col-md-12 keyboard-line">

          <span class="key">H</span>
          <span class="key">I</span>
          <span class="key">J</span>
          <span class="key">M</span>
          <span class="key">N</span>
          <span class="key">K</span>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .answer-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .answer-placeholder {
    width: 120px;
    display: inline-block;
    border-bottom: 2px solid black;
    height: 24px;
  }

  .answer-row {
    margin-bottom: 1em;
  }

  .keyboard {
    text-align: center;
  }

  .keyboard .key{
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 5px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    width: 39px;
  }

  .keyboard .key:hover{
    background-color: gray;
  }

  .keyboard-line {
    margin-bottom: 10px;
  }

  .keyboard-row {
    margin-bottom: 2em;
  }
  `]
})
export class AnswerComponent {
  @Input() question: IQuestion;
}