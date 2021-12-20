import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { ProfileService } from 'src/app/user/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private profileService: ProfileService,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    this.formGroup = this._formBuilder.group({
      name: [''],
      city: [''],
      country: [''],
      bio: [''],
      born: [''],
    });
    this.profileService.getProfile().subscribe((res) => {
      this.formGroup.setValue({
        name: res.name,
        city: res.city,
        country: res.country,
        bio: res.bio,
        born: res.born,
      });
    });
  }
  closePage(event: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/dashboard');
  }
  submitForm(event: any, type: string) {
    this.profileService
      .editProfile(type, this.formGroup.value[type])
      .subscribe((e) => console.log('e'));
  }
}
