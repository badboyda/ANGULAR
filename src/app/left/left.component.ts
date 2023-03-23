import { MathService } from './../services/math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers:[MathService]
})
export class LeftComponent implements OnInit {

  constructor(public _math:MathService) { }

  ngOnInit(): void {
  }
  increase(){
    this._math.addOne();
  }
}
