import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
@Input() playerImage: string;
@Input() playerName: string;
@Input() playerData: string;
@Input() progressBarLabel: string;
@Input() percentageProgressBar: number;
  constructor() { }

  ngOnInit() {
  }

}
