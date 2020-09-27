import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  quotes=[
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
