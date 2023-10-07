import { Component, OnInit } from '@angular/core';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrello, faFlipboard } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  faClock = faClock
  faTrello = faTrello
  faFlipboard = faFlipboard
  faWaveSquare = faWaveSquare

  constructor() { }

  ngOnInit(): void {
  }

}
