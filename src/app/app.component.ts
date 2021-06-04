import { Component, OnInit } from '@angular/core';

import { Card } from './shared/models/card.model';
import * as data from '../db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider-test';
  cards: Card[] = JSON.parse(JSON.stringify(data)).default.users;
}
