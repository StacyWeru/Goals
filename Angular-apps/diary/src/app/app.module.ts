import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryNotesComponent } from './diary-notes/diary-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DiaryComponent,
    DiaryNotesComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
