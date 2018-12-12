import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // Eagerly preload card module
    const s = document.createElement('script');
    s.setAttribute('src', './main.card.js');
    document.head.appendChild(s);
  })
  .catch(err => console.error(err));
