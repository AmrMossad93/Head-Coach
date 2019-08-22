import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-statment',
  templateUrl: './word-statment.component.html',
  styleUrls: ['./word-statment.component.css']
})
export class WordStatmentComponent implements OnInit {
  @Input() wordStatment: string;
  @Input() nameBy: string;
  constructor() { }

  ngOnInit() {
  }

}
