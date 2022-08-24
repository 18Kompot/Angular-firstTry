import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { TitleForMyApplicationComponent } from './title-for-my-application/title-for-my-application.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleComponent,
    TitleForMyApplicationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
