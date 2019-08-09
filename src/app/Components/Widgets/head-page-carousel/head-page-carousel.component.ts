import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-page-carousel',
  templateUrl: './head-page-carousel.component.html',
  styleUrls: ['./head-page-carousel.component.css']
})
export class HeadPageCarouselComponent implements OnInit {
  @Input() headName: string;
  @Input() tittle: string;
  @Input() image1: string;
  @Input() image2: string;
  @Input() image3: string;
  @Input() paraghragh1: string;
  @Input() paraghragh2: string;
  @Input() paraghragh3: string;

  constructor() { }
  ngOnInit() {
  }

}
