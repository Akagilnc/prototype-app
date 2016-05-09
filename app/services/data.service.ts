import {IQuestion} from '../all.interface.ts';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  private _questions: Array<IQuestion> = questions;

  questions(): Array<IQuestion> {
    return this._questions;
  }
}

var questions = [
  {
    question: "Android is a software ___ for mobile devices.",
    answer: "slack",
    audioFile: "q1stack.mp3"
  },
  {
    question: "Angular is an open source web application framework, focused on developer productivity, speed, and ___ .",
    answer: "testability",
    audioFile: "q2testability.mp3"
  },
  {
    question: "The Go ___ language is an open source project to make programmers more productive.",
    answer: "programming",
    audioFile: "q3programming.mp3"
  },
  {
    question: "The Google Web Toolkit is a development toolkit for building and ___ complex browser-based applications.",
    answer: "optimizing",
    audioFile: "q4optimizing.mp3"
  },
  {
    question: "The Closure tools help developers to build rich web ___ with JavaScript.",
    answer: "applications",
    audioFile: "q5applications.mp3"
  }
];