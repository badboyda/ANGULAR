import { MathService } from './../services/math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(public _math:MathService ) {}

  ngOnInit(): void {
  }
increase(){
  this._math.addOne();
}
}
