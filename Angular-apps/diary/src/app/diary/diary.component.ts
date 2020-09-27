import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  name ="Stacy";
  title;
  date;
  entry;

  diarys:Diary[] = [
    { title:'Got hit by a car',date:(20121023),entry:'Didnt end well,now I am dead'},
    { title:'Got rushed to the hospital',date:(20121023),entry:' Again Didnt end well,cause now I am dead...Feel bad for the doctors though'},
    { title:'Realized that I am a ghost',date:(20121023),entry:' I have to say that I am embarassed that I had a couple temper tantrums,the hospital had to replace a couple of windows'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
