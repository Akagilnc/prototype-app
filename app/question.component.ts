import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {IQuestion} from './all.interface';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'question',
  template: `
  <div class="row question-header">
    <div class="col-md-5">
      <span class="question-name">Question 1</span>
      <a class="btn btn-default btn-sm"><i class="fa fa-play"></i></a>
    </div>
    <div class="col-md-7">
      <div class="navigation-buttons pull-right">
        <a class="btn btn-default" (click)="previousQuestion()"><i class="fa fa-caret-left"></i></a>
        <a class="btn btn-default" (click)="nextQuestion()"><i class="fa fa-caret-right"></i></a>
      </div>
    </div>
  </div>

  <div class="row question-content">
    <div class="col-md-12">
      <p>{{ question.question }}</p>
    </div>
  </div>
  `,
  styles: [`
  .question-name {
    font-size: 1.5em;
    font-weight: bold;
  }

  .question-header {
    margin-bottom: 0.5em;
  }

  .question-content {
    margin-bottom: 2em;
  }
  `]
})
export class QuestionComponent implements OnChanges{
  @Input('question') question: IQuestion;

  constructor(private dataService: ProgressService) {

  }



  playSound() {

  }

  nextQuestion() {
    this.dataService.nextQuestion();
  }

  previousQuestion() {
    this.dataService.previousQuestion();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log(changes);
  }

}