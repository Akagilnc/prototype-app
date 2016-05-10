import {Component, Input} from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
    <li class="list-group-item"
        *ngFor="let question of questions"
        [ngClass]="{active: activeQuestion == question}"
        (click)="setActiveQuestion(question)">
        {{ question.question }}
    </li>
  </ul>
  `,
  directives: [NgFor, NgClass]
})
export class QuestionListComponent {
  @Input('active-question') activeQuestion: IQuestion;
  @Input('questions') questions: Array<IQuestion>;

  constructor(private progressService: ProgressService) {

  }

  setActiveQuestion(question: IQuestion) {
    this.progressService.setActiveQuestion(question);
  }

}