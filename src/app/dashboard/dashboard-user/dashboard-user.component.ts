import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../profile.service";
import { faUser,faCheckCircle,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class DashboardUserComponent implements OnInit {

  faUser = faUser;
  faCheckCircle = faCheckCircle;
  faCalendarAlt = faCalendarAlt;
  today: number = Date.now();
  constructor(public profileService: ProfileService) {}

  ngOnInit(): void {
  }

}
