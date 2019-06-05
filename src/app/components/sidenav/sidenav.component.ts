import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PersonalData } from 'src/app/shared/curriculum.model';
import { CURRICULUM } from 'src/app/shared/mock-curriculum';

declare var M: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit, AfterContentInit {

  personalData: PersonalData;

  constructor() {
    this.personalData = CURRICULUM.personalData;
    console.log( this.personalData );
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, []);
  }

}
