import {Component} from '@angular/core';
import {HeaderComponent} from './header.component';
import {QuestionComponent} from './question.component';
import {AnswerComponent} from './answer.component';
import {ProgressBarComponent} from './progress-bar.component';
import {QuestionListComponent} from './question-list.component';

import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';
import {DataService} from './services/data.service';
@Component({
    selector: 'my-app',
    directives: [HeaderComponent, QuestionComponent, AnswerComponent, ProgressBarComponent, QuestionListComponent],
    providers: [ProgressService, DataService],
    template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="row">
            <div class="col-md-8">
              <header></header>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-md-offset-2">
          <div class="row">
            <div class="col-md-8">

              <question [question]="activeQuestion"></question>

              <answer></answer>

              <progress-bar></progress-bar>

            </div>
            <div class="col-md-4">
              <question-list></question-list>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})
export class AppComponent {
  private activeQuestion: IQuestion;

  constructor(private progressService: ProgressService) {
    this.activeQuestion = this.progressService.getActiveQuestion();
  }


}
