import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

     goals: Goal[] = [
    new Goal (1 ,'Rewatch Avengers Endgame', 'I think I need to cry and cheer somemore.'),
    new Goal (2,'Bake a cake', 'I wish it were my birthday so I could have a reason to ,but I just want to.'),
    new Goal(3, 'Get a new Phone' ,'I had mine for far too long'),
    new Goal (4, 'Get Dog and cat Food' ,'Cause I have a cat and dog'),
    new Goal (5, 'Solve Fluid Mechanics Homework', 'So I can get leakage for my final exam'),
    new Goal (6, 'Plot world domination plan', 'So I can claim everyone and everything on this earth as mine...mwahahaha!'),
  ];

  constructor() { }

  ngOnInit(){
  }

}
