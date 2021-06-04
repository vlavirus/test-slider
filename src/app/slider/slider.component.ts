import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() cards: Card[];
  swiperConfig: SwiperConfigInterface;

  constructor() { }

  ngOnInit(): void {
    this.swiperConfig = {
      direction: 'horizontal',
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      scrollbar: true,
      navigation: true,
      pagination: true,
      watchSlidesProgress: true,
      centeredSlides: true,
      spaceBetween: 15.6,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      slideActiveClass: 'active-slide',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1.2,
          centeredSlides: false,
          pagination: {
            type: 'progressbar'
          }
        },
        992: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 6,
        },
        1280: {
          slidesPerView: 2,
          centeredSlides: false
        },
        1600: {
          slidesPerView: 2,
          centeredSlides: false
        },
        1720: {
          slidesPerView: 3,
          centeredSlides: true
        }
      }
    };
  }
}
