import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guid-box',
  templateUrl: './guid-box.component.html',
  styleUrls: ['./guid-box.component.css']
})
export class GuidBoxComponent implements OnInit {
  @Input() pageName: string;
  @Input() icon1: string;
  @Input() feature1: string;
  @Input() paragragh1: string;
  @Input() icon2: string;
  @Input() feature2: string;
  @Input() paragragh2: string;
  @Input() icon3: string;
  @Input() feature3: string;
  @Input() paragragh3: string;
  constructor() { }

  ngOnInit() {
  }

}
