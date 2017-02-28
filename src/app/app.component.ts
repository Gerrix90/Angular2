import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
  </ul>
  <hr>
  <router-outlet></router-outlet>
  ` ,
})
export class AppComponent  { 

}
