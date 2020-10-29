import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numberArray = [1,3,5,12,67,34,23,78,18,25,3];
  stringArray = ["cat","dog","fish","lion","zebra","shark", "whale"];

  numberArraySelected = true;

}
