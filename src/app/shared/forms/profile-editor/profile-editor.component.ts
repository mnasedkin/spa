import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProfileService} from "../../../profile.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  firstName = '';
  lastName = '';
  profileForm = new FormGroup({
    firstName: new FormControl(this.profileService.firstName, [
      Validators.required,
        Validators.minLength(2),
    ]),
    lastName: new FormControl(this.profileService.lastName, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
  constructor(private profileService: ProfileService, public snackBar: MatSnackBar) {
    this.firstName = this.profileService.firstName;
    this.lastName = this.profileService.firstName;
  }
  onSubmit() {
    this.profileService.updateProfile(this.profileForm.value.firstName,this.profileForm.value.lastName);
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
  }
  openSnackBar() {
    this.snackBar.open('Form Submitted Successfully','Profile Updated!', {duration: 5000});
  }
}
