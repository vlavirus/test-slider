import { Component, Input, OnInit } from '@angular/core';

import { DESCRIPTION_MAX_LENGTH } from 'src/app/shared/constants/constants';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() card: Card;

  toggleText = false;
  descriptionMaxLength = DESCRIPTION_MAX_LENGTH;

  constructor() { }

  ngOnInit(): void {}

  isToggleText(): void {
    this.toggleText = !this.toggleText;
  }

}
