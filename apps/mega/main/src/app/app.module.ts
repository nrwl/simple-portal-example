import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomeModule } from '@myorg/home';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HomeModule,
    RouterModule.forRoot([
      {
        path: 'card',
        loadChildren: '@myorg/card#CardModule'
      }
    ], {
      preloadingStrategy: PreloadAllModules
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
