import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponent } from "./GoalComponent";

describe('GoalComponent', () => {
  let component: GoalComponent;
  let fixture: ComponentFixture<GoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
