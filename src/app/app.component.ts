import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private switch = true;
  private items = [1,2,3,4,5,6];
  private value = 55;

  onSwitch(){
    this.switch = !this.switch;
  }
}
