import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MainPage } from './main-page/main-page';
import { AboutPage } from './about-page/about-page';
import { ProjectsPage } from './projects-page/projects-page';
import { Card } from './card/card';

@NgModule({
  declarations: [
    App,
    MainPage,
    AboutPage,
    ProjectsPage,
    Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
