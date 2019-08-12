import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vedio-guid',
  templateUrl: './vedio-guid.component.html',
  styleUrls: ['./vedio-guid.component.css']
})
export class VedioGuidComponent implements OnInit {
  @Input() youtubeURL: string;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
