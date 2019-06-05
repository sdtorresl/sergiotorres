import { Component, OnInit } from '@angular/core';
import { CURRICULUM } from '../../shared/mock-curriculum';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.sass']
})
export class AchievementsComponent implements OnInit {

  achievements = CURRICULUM.achievements;

  constructor() { }

  ngOnInit() {
  }

}
