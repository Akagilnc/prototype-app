'use strict'

import {Component, Input} from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';
import {DataService} from "./services/data.service";

var dataService = require("./services/data.service.ts")


@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
    <div class="list-group">
     <!-- <a href="#" class="list-group-item active">
        
        Questions 1 
        <span class="glyphicon glyphicon-ok"></span>
        </a>
      
      <a href="#" class="list-group-item"> 
        Questions 2
        <span class="glyphicon glyphicon-remove"></span>
      
      </a>
      <a href="#" class="list-group-item"> Questions 3</a>
      <a href="#" class="list-group-item"> Questions 4</a>
      <a href="#" class="list-group-item"> Questions 5</a> !-->
      <a href="#" class="list-group-item" *ngFor="let displayQuestion of questionList">
      {{displayQuestion.title}}</a>
    
    </div>
  </ul>
  `,
  directives: [NgFor, NgClass]
})
export class QuestionListComponent {
  @Input('question') question: IQuestion
  public questionList = this.progressService.getAllQuestions()



  constructor(private progressService: ProgressService) {

  }

  setActiveQuestion(question: IQuestion) {
    var activeQuestion = this.progressService._getActiveQuestion()

    question = this.questionList.find(activeQuestion[0].title);
    


  }

}
