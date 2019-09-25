import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { mock, instance, when, anything, verify } from 'ts-mockito';
import { Subject, of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let route: ActivatedRoute;
  let router: Router;
  let fb: FormBuilder;
  let authService: AuthService;
  const login$: Subject<any> = new Subject<any>();
  const queryParams$: Subject<Params[]> = new Subject<Params[]>();

  beforeEach(() => {
    route = mock(ActivatedRoute);
    when(route.queryParams).thenReturn(queryParams$);
    router = mock(Router);
    fb = new FormBuilder();
    authService = mock(AuthService);

    component = new LoginComponent(
      instance(route),
      instance(router),
      fb,
      instance(authService),
    );
  });
  describe('A) Nominal case', () => {
    it('1) should create', () => {
      expect(component).toBeTruthy();
    });

    it('2) form should be initialized', () => {
      // prepare
      // execute
      component.ngOnInit();
      // verify
      expect(component.form).toBeTruthy();
      expect(component.form.controls.username).toBeDefined();
      expect(component.form.controls.password).toBeDefined();
      component.ngOnDestroy();
    });

    it('3) should login', () => {
      // prepare
      component.ngOnInit();
      // execute
      component.login();
      // verify
      expect(component.form.valid).toBeFalsy();
      verify(authService.login(anything())).never();
      component.ngOnDestroy();
    });

    it('4) should login', () => {
      // prepare
      const formValue = {
        username: 'username',
        password: 'my secret',
      };
      when(authService.login(anything())).thenReturn(of(anything()));
      component.ngOnInit();
      component.form.setValue(formValue);
      // execute
      component.login();
      // verify
      expect(component.form.valid).toBeTruthy();
      verify(authService.login(anything())).once();
      verify(router.navigate(anything())).once();
      component.ngOnDestroy();
    });
  });
});
