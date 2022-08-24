import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 component_to_show: string = 'recipe';
 showComponent($event: string){
  this.component_to_show = $event;
 };
}
