import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSignUp: boolean = true;
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });
  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}
  submitForm() {
    if (this.authForm.invalid) {
      this._snackBar.open('invalid data', 'close', {
        duration: 3000,
      });
      return;
    }
    this.authService
      .doAuth(this.authForm.value, this.isSignUp)
      .subscribe((_) => this.router.navigateByUrl('/dashboard'));
  }
  changeGoal() {
    this.isSignUp = !this.isSignUp;
  }
  ngOnInit(): void {}
}

export class PizzaPartyComponent {}
