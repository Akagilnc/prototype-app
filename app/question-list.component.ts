import {Component, Input} from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
    <div class="list-group">
      <a href="#" class="list-group-item active">
        
        Questions 1 
        <span class="glyphicon glyphicon-ok"></span>
        </a>
      
      <a href="#" class="list-group-item"> 
        Questions 2
        <span class="glyphicon glyphicon-remove"></span>
      
      </a>
      <a href="#" class="list-group-item"> Questions 3</a>
      <a href="#" class="list-group-item"> Questions 4</a>
      <a href="#" class="list-group-item"> Questions 5</a>
    
    </div>
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
