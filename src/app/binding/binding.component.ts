import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  name: string = "antony";
  bookStatus: string = "Available";
  toggle: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle = false;
    }, 2000);
  }

    onToggle(){
       if (this.bookStatus == "Available") {
       this.bookStatus = "Not Available";
  }
  else {
      this.bookStatus = "Available";
  }
}
}
