import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

     goals: Goal[] = [
    new Goal (1 ,'Rewatch Avengers Endgame', 'I think I need to cry and cheer somemore.',new Date (2020,3,24)),
    new Goal (2,'Bake a cake', 'I wish it were my birthday so I could have a reason to ,but I just want to.',new Date (2021,4,25)),
    new Goal(3, 'Get a new Phone' ,'I had mine for far too long',new Date (2022,5,26)),
    new Goal (4, 'Get Dog and cat Food' ,'Cause I have a cat and dog',new Date (2023,6,27)),
    new Goal (5, 'Solve Fluid Mechanics Homework', 'So I can get leakage for my final exam',new Date (2020,7,28)),
    new Goal (6, 'Complete world domination plan', 'So I can claim everyone and everything on this earth as mine...mwahahaha!',new Date (2039,8,29)),
  ];
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit(){
  }

}
