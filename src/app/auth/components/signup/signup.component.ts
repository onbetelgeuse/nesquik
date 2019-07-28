import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Signup'
  hide = true;
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.minLength(2)],
      lastName: ['', Validators.minLength(2)],
      email: ['', [Validators.email]],
      username: ['', Validators.minLength(3)],
      password: ['', Validators.minLength(6)]
    });
  }

  signup() {
    if (this.form.valid) {

      this.authService.signup(this.form.value)
        .subscribe(res => {
          this.router.navigate(['/auth/login']);
        }, (error: HttpErrorResponse) => {
          console.log(error);
        });
    }
  }

}
