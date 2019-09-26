import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public hide = true;
  public title = 'Login';
  public form: FormGroup;

  private returnUrl: string;

  private subParams: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  public ngOnInit() {
    this.subParams = this.route.queryParams.subscribe(
      params => (this.returnUrl = params.returnUrl),
    );
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public ngOnDestroy(): void {
    this.subParams.unsubscribe();
  }

  public login() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(res => {
        this.authService.getCurrentUser();
        this.router.navigate([this.returnUrl || '']);
      });
    }
  }
}
