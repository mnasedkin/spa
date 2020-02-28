import { Component } from '@angular/core';
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  user = { name: 'John D', icon : faUser };
  menuItems = [
    {
      name: 'Settings',
      url: '/settings',
      icon: faCog
    },
    {
      name: 'Help',
      url: '/help',
      icon: faCog
    }
  ];
  constructor(public profileService: ProfileService) {}
}
