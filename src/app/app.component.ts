import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boot';
  randomNumber: number=0;
  constructor(){}
  //@input Decerator
  subject: object = [
    { id: 1, name: 'Tamil' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Maths' },
    { id: 4, name: 'science' },
    { id: 5, name: 'social science' }
 ];
 //@output Decarator
 public onNumberGenerated(randomNumber:number){
  this.randomNumber=randomNumber;
 }
 }

