import {Component} from '@angular/core';

@Component({
  selector: 'question-list',
  template: `
  <ul class="list-group">
    <li class="list-group-item active">Question 1</li>
    <li class="list-group-item">Question 2</li>
    <li class="list-group-item">Question 3</li>
    <li class="list-group-item">Question 4</li>
    <li class="list-group-item">Question 5</li>
  </ul>
  `
})
export class QuestionListComponent {

}