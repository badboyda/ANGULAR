import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() subjectChild: any;

  @Output() private numberGenerated1= new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }
public generatenumber(){
const randomNumber=Math.random();
this.numberGenerated1.emit(randomNumber);
}
}
