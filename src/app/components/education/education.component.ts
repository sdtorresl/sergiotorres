import { Component, OnInit } from '@angular/core';
import { CURRICULUM } from '../../shared/mock-curriculum';
import { Study, Education } from '../../shared/curriculum.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  education: Education = CURRICULUM.education;
  studies: Study[] = CURRICULUM.education.studies;

  constructor() {
  }

  ngOnInit() { }

}
