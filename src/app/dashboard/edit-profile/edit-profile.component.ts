import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      city: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      country: [''],
    });
    this.fourthFormGroup = this._formBuilder.group({
      bio: [''],
    });
  }
}
