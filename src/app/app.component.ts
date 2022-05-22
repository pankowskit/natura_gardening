import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './sass/styles.scss'
  ]
})
export class AppComponent {
  MenuData:Array<any>=[
    {path:"",name:"Home"},
    {path:"seeds",name:"Seeds"},
    {path:"tips",name:"Tips"},
    {path:"tools",name:"Tools"},
    {path:"contact",name:"Contact"}
  ];
  title = 'babysitting';
}
