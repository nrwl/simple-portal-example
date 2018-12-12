import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-home',
  template: `
    <p>
      home works!
    </p>
    <p>
      <a routerLink="/card">card</a>
    </p>
  `,
  styles: []
})
export class HomeComponent {
}
