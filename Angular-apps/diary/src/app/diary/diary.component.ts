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
    new Diary ("Watch finding Nemo"; 'Find an online version and watch merlin find his son'; new Date(2020,3,14)),
    new Diary ('Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Diary ('Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
