import {Component} from '@angular/core';
import {HeaderComponent} from './header.component';
import {QuestionComponent} from './question.component';
import {AnswerComponent} from './answer.component';
import {ProgressBarComponent} from './progress-bar.component';
import {QuestionListComponent} from './question-list.component';

import {IQuestion} from './all.interface.ts';
import {ProgressService} from './services/progress.service';
import {DataService} from './services/data.service';
import {SoundPlayer} from './services/sound-player.service';

@Component({
    selector: 'my-app',
    directives: [HeaderComponent, QuestionComponent, AnswerComponent, ProgressBarComponent, QuestionListComponent],
    providers: [ProgressService, DataService, SoundPlayer],
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

              <answer [question]="activeQuestion"></answer>

              <progress-bar></progress-bar>

            </div>
            <div class="col-md-4">
              <question-list [questions]="questions" [active-question]="activeQuestion"></question-list>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})
export class AppComponent {
  private activeQuestion: IQuestion;
  private questions: Array<IQuestion>;

  constructor(private progressService: ProgressService) {
    this.progressService.activeQuestion().subscribe(question => {
      this.activeQuestion = question
    });
    this.questions = this.progressService.getAllQuestions();
  }


}
