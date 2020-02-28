import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = 'John';
    this.lastName  = 'Doe';
  }

  updateProfile(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
  }
}
