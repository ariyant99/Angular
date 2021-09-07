import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  	.textback {
  		background: yellow;
  	}
  `]
})
export class AppComponent {
  title = 'myApp';
  retValue = "";
  col = "black";

  constructor() {
  	this.col = Math.random() > 0.5 ? 'black' : 'red';
  }

  getColor() {
  	return this.col;
  }
  
}
