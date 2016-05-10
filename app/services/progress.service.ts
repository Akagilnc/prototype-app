import {IQuestion} from '../all.interface.ts';
import {DataService} from './data.service';
import {Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProgressService {
  private _questions: Array<IQuestion>;
  private _currentQuestionIndex = 0;
  private _successPercent = 0;

  private $activeQuestionBroadcaster: any;
  private $activeQuestionObserver: Observable<IQuestion>;

  constructor(private dataService: DataService) {
    this._questions = dataService.questions();

    this.$activeQuestionObserver = Rx.Observable.create((observer: Observable<IQuestion>) => {
      this.$activeQuestionBroadcaster = observer;
      this.$activeQuestionBroadcaster.next(this._getActiveQuestion());
    }).share();
  }

  getAllQuestions(): Array<IQuestion> {
    return this._questions;
  }

  activeQuestion(): Observable<IQuestion> {
    return this.$activeQuestionObserver;
  }

  private _getActiveQuestion(): IQuestion {
    return this._questions[this._currentQuestionIndex];
  }

  getSuccessPercent(): IQuestion {
    throw new Error("Not implemented");
  }

  nextQuestion() {
    if (this._currentQuestionIndex < this._questions.length - 1) {
      this._currentQuestionIndex++;
      this.$activeQuestionBroadcaster.next(this._getActiveQuestion());
    }
  }

  previousQuestion() {
    if (this._currentQuestionIndex > 0) {
      this._currentQuestionIndex--;
      this.$activeQuestionBroadcaster.next(this._getActiveQuestion());
    }
  }

  setActiveQuestion(question: IQuestion): void {
    var index = this._questions.indexOf(question);
    this._currentQuestionIndex = index;
    this.$activeQuestionBroadcaster.next(this._getActiveQuestion());
  }





}