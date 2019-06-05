import { Component, OnInit } from '@angular/core';
import { CURRICULUM } from '../../shared/mock-curriculum';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  experience = CURRICULUM.experience;

  constructor() {}

  ngOnInit() {}

}
