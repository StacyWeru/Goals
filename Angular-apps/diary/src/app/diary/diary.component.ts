import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary"

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  entries:Diary[] = [
    { id: 1, title:'Got hit by a car',date:(2012,10,23),entry:'Didnt end well,now I am dead'},
    { id: 2, title:'Got rushed to the hospital',date:(2012,10,23),entry:' Again Didnt end well,cause now I am dead...Feel bad for the doctors though'},
    { id: 3, title:'Realized that I am a ghost',date:(2012,10,23),entry:' I have to say that I am embarassed that I had a couple temper tantrums,the hospital had to replace a couple of windows'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
