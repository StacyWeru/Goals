import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteCountComponent } from './vote-count/vote-count.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePageComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    VoteCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
