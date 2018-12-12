import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from '@myorg/home';
import { AppComponent } from './app.component';

const installedModules = {};
let modules;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      {
        path: 'card',
        loadChildren: () => {
          return new Promise(res => {
            const interval = setInterval(() => {
              if (window['webpackJsonpcard']) {
                clearInterval(interval);
                modules = (window as any).webpackJsonpcard[0][1];
                const r = __webpack_require__(
                  './src/app/app.module.ngfactory.js'
                );
                res(r['AppModuleNgFactory']);
              }
            }, 10);
          });
        }
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

function __webpack_require__(moduleId) {
  // Check if module is in cache
  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  const module = (installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  });

  if (!modules[moduleId]) {
    throw new Error('Cannot find ' + moduleId);
  }

  // Execute the module function
  modules[moduleId].call(
    module.exports,
    module,
    module.exports,
    __webpack_require__
  );

  // Flag the module as loaded
  module.l = true;

  // Return the exports of the module
  return module.exports;
}
