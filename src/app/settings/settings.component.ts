import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { ProfileService } from "../profile.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  faUser = faUser;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  updateModel(formData) {
    this.profileService.updateProfile(formData.firstName, formData.lastName);
    console.log('profile updated');
  }

}
