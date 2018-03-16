import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapse = true;
  toggle() {
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
}
