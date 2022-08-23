import { Component, OnInit } from '@angular/core';

export class User{
  constructor(
    public userId: number,
    public id: number,
    public body: string,
    public title: string
  ){

  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bangoen';
  public users: User[] = [];

}
