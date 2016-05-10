import {Component, Input} from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
  </ul>
  `,
  directives: [NgFor, NgClass]
})
export class QuestionListComponent {

  constructor(private progressService: ProgressService) {

  }

  setActiveQuestion(question: IQuestion) {

  }

}