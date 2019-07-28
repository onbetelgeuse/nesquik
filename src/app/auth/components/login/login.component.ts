import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;
  title = 'Login';
  form: FormGroup;

  returnUrl: string;

  private subParams: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {

    this.subParams = this.route.queryParams.subscribe(params => this.returnUrl = params['returnUrl']);
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    if (this.subParams) {
      this.subParams.unsubscribe();
    }
  }

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value)
        .subscribe(res => {
          this.router.navigate([this.returnUrl || '']);
        });
    }
  }

}
