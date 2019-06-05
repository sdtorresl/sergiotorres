import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';
import { CURRICULUM } from '../../shared/mock-curriculum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor() {
    this.profile = CURRICULUM.profile;
  }

  ngOnInit() {
  }

}
