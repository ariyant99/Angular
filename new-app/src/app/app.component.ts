import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  log : any[] = [];

  toggleData() {
    this.show = !this.show;

    //this.log.push(this.log.length + 1);
    this.log.push(new Date);


  }
}
