import {Component, Input} from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
    <div class="list-group">
      <a href="#" class="list-group-item" *ngFor="let displayQuestion of questions"
[ngClass]="{active: displayQuestion == activeQuestion}">
      {{displayQuestion.title}}</a>
    
    </div>
  </ul>
  `,
  directives: [NgFor, NgClass]
})
export class QuestionListComponent {
  @Input('questions') questions: IQuestion
  @Input('active-question') activeQuestion: IQuestion

  constructor(private progressService: ProgressService) {
    this.setActiveQuestion();
  }

  setActiveQuestion() {

  }

}
