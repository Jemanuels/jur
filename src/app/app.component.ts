import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jur';

  data = {title: 'Jurgen'};

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  }
}
