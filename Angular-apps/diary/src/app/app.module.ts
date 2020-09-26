import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryNotesComponent } from './diary-notes/diary-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DiaryComponent,
    DiaryNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
