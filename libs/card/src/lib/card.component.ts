import { Component, Inject } from '@angular/core';

@Component({
  selector: 'myorg-card',
  template: `
    <p>
      card works!
    </p>
    <p>
      <a routerLink="/">home</a>
    </p>
  `,
  styles: []
})
export class CardComponent {
}
