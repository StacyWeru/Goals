import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  quotes=[
     new Quote(1,'Kim Namjoon','Maybe I made a mistake yesterday,but yesterdays me is still me,I am who I am today with all my faults.Tomorrow I might be a tiny it wiser but that is me too','Ace',new Date(2018,10,12)),
     new Quote(2,'Min Yoongi','In the end,some of you greatest pains becomes your greatest strengths','Ace',new Date(2018,4,09)),
     new Quote(3,'Kim Seokjin','Youre really the only one who needs to acknowledge your effort','Ace', new Date(2015,11,4)),
     new Quote(1,'Jung Hoseok','Lets not push off the things we need to do today for tomorrow','Ace', new Date(2018,3,18))
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
