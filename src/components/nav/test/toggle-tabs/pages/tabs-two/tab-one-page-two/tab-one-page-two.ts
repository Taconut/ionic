import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
  segment: 'TabsTwoTabOnePageTwo/userId/:userId/name/:name'
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Tabs 2 Tab 1 Page 2</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 2 Tab 1 Page 2
  <div>
  User ID: {{userId}}
  </div>
  <div>
  Name: {{name}}
  </div>
  <button ion-button (click)="goToNext()">Next</button>
</ion-content>
  `
})
export class TabsTwoTabOnePageTwo {
  userId: string;
  name: string;
  constructor(public nav: NavController, navParams: NavParams) {
    this.userId = navParams.data.userId;
    this.name = navParams.data.name;
  }

  goToNext() {
    this.nav.push('TabsTwoTabOnePageThree', { paramOne: 'Stamford', paramTwo: 'CT'});
  }
}
