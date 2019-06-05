import { Component, OnInit } from '@angular/core';
import { CURRICULUM } from '../../shared/mock-curriculum';
import { PersonalData } from '../../shared/curriculum.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  personalData: PersonalData;

  constructor() {
    this.personalData = CURRICULUM.personalData;
    console.log( this.personalData );
  }

  ngOnInit() { }

}
