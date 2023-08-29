import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'belatrix-fronend';

  darkMode: boolean = false;
  close: boolean = false;


  toggleDarkMode(){
    this.darkMode = !this.darkMode;
  }

  toggleClose(){
    this.close = !this.close;
    console.log('1asdsad')
  }

}
