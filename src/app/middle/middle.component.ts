import { MathService } from './../services/math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  // providers:[MathService]
})
export class MiddleComponent implements OnInit {

  constructor(public _math:MathService) { }

  ngOnInit(): void {
  }
increase(){
  this._math.addOne();
}
}
