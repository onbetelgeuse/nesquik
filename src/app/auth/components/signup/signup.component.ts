import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public title = 'Signup';
  public hide = true;
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private readonly authService: AuthService,
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.minLength(2), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  public signup() {
    if (this.form.valid) {
      this.authService.signup(this.form.value).subscribe(
        res => {
          this.router.navigate(['/auth/login']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        },
      );
    }
  }
}
