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
    audioFile: "/assets/audio/q1.mp3",
    position: 1
  },
  {
    question: "Angular is an open source web application framework, focused on developer productivity, speed, and ___ .",
    answer: "testability",
    audioFile: "/assets/audio/q2.mp3",
    position: 2
  },
  {
    question: "The Go ___ language is an open source project to make programmers more productive.",
    answer: "programming",
    audioFile: "/assets/audio/q3.mp3",
    position: 3
  },
  {
    question: "The Google Web Toolkit is a development toolkit for building and ___ complex browser-based applications.",
    answer: "optimizing",
    audioFile: "/assets/audio/q4.mp3",
    position: 4
  },
  {
    question: "The Closure tools help developers to build rich web ___ with JavaScript.",
    answer: "applications",
    audioFile: "/assets/audio/q5.mp3",
    position: 5
  }
];