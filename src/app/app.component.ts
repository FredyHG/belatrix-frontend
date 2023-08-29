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
  colorMode: string = 'Dark Mode';


  toggleDarkMode(){
    this.darkMode = !this.darkMode;

    if(this.darkMode){
      this.colorMode = 'Light Mode';
    }else{
      this.colorMode = 'Dark Mode';
    }


  }

  toggleClose(){
    this.close = !this.close;
  }

}
