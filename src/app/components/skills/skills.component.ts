import { Component, OnInit } from '@angular/core';
import { CURRICULUM } from '../../shared/mock-curriculum';
import { Curriculum, Skills } from '../../shared/curriculum.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills: Skills = CURRICULUM.skills;

  constructor() { }

  ngOnInit() {
  }

}
