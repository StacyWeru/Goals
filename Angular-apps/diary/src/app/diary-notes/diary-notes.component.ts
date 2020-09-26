import { Component, OnInit ,Input} from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-notes',
  templateUrl: './diary-notes.component.html',
  styleUrls: ['./diary-notes.component.css']
})
export class DiaryNotesComponent implements OnInit {
  
  @Input() diary:Diary;
  constructor() { }

  ngOnInit(): void {
  }

}
