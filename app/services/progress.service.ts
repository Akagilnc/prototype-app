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



  constructor(private dataService: DataService) {
    this._questions = dataService.questions();
  }

  getActiveQuestion(): IQuestion {
    return this._questions[this._currentQuestionIndex];
  }

  getSuccessPercent(): IQuestion {

  }

  nextQuestion(): IQuestion {

  }

  previousQuestion(): IQuestion {

  }



}