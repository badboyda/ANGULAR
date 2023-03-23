import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  books = [
    {
      'bookid': 7256,
      'bookname': 'java',
      'author': 'james',
      'bookstatus': 'Available',
      'catagory': 'education'
    },
    {
      'bookid': 7257,
      'bookname': 'c',
      'author': 'dennies',
      'bookstatus': 'Available',
      'catagory': 'education'
    },
    {
      'bookid': 7258,
      'bookname': 'c++',
      'author': 'name therila',
      'bookstatus': 'NotAvailable',
      'catagory': 'education'
    },


  ]
}
