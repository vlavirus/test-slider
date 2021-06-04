import { Component } from '@angular/core';

import { Card } from './shared/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider-test';
  cards: Card[] = [
    {
      cardImage: 'assets/images/avatars/user1.png',
      cardUserName: 'Nick Colebatch',
      cardUserPosition: 'RV Cover Supply',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying Google Analytics data which can be demystifying Google Analytics data which can be'
    },
    {
      cardImage: 'assets/images/avatars/user2.png',
      cardUserName: 'Carlene Grace',
      cardUserPosition: '2019 Verified Google 5-Star Review',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying ' +
        'Google Analytics data which can be overwhelming. The service trawls through' +
        ' your data and finds the areas where you can improve - even if you were an expert' +
        ' this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics' +
        ' data which can be overwhelming. The service trawls through your data and finds the areas where ' +
        'you can improve - even if you were an expert this would save time. For me...'
    },
    {
      cardImage: 'assets/images/avatars/user2.png',
      cardUserName: 'Carlene Grace',
      cardUserPosition: '2019 Verified Google 5-Star Review',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying ' +
        'Google Analytics data which can be overwhelming. The service trawls through' +
        ' your data and finds the areas where you can improve - even if you were an expert' +
        ' this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics' +
        ' data which can be overwhelming. The service trawls through your data and finds the areas where ' +
        'you can improve - even if you were an expert this would save time. For me...'
    },
    {
      cardImage: 'assets/images/avatars/user2.png',
      cardUserName: 'Carlene Grace',
      cardUserPosition: '2019 Verified Google 5-Star Review',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying ' +
        'Google Analytics data which can be overwhelming. The service trawls through' +
        ' your data and finds the areas where you can improve - even if you were an expert' +
        ' this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics' +
        ' data which can be overwhelming. The service trawls through your data and finds the areas where ' +
        'you can improve - even if you were an expert this would save time. For me...'
    },
    {
      cardImage: 'assets/images/avatars/user2.png',
      cardUserName: 'Carlene Grace',
      cardUserPosition: '2019 Verified Google 5-Star Review',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying ' +
        'Google Analytics data which can be overwhelming. The service trawls through' +
        ' your data and finds the areas where you can improve - even if you were an expert' +
        ' this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics' +
        ' data which can be overwhelming. The service trawls through your data and finds the areas where ' +
        'you can improve - even if you were an expert this would save time. For me...'
    },
    {
      cardImage: 'assets/images/avatars/user2.png',
      cardUserName: 'Carlene Grace',
      cardUserPosition: '2019 Verified Google 5-Star Review',
      cardUserDescription: 'I\'ve found Diib to be very helpful on demystifying ' +
        'Google Analytics data which can be overwhelming. The service trawls through' +
        ' your data and finds the areas where you can improve - even if you were an expert' +
        ' this would save time. I\'ve found Diib to be very helpful on demystifying Google Analytics' +
        ' data which can be overwhelming. The service trawls through your data and finds the areas where ' +
        'you can improve - even if you were an expert this would save time. For me...'
    },

  ]
}
