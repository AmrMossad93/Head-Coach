import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-boxes',
  templateUrl: './price-boxes.component.html',
  styleUrls: ['./price-boxes.component.css']
})
export class PriceBoxesComponent implements OnInit {
@Input() basicPrice: string;
@Input() professionalPrice: string;
@Input() unlimitedPrice: string;
  constructor() { }

  ngOnInit() {
  }

}
