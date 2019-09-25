import { SignupComponent } from './signup.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import {
  mock,
  instance,
  verify,
  deepEqual,
  anyOfClass,
  anything,
  when,
} from 'ts-mockito';
import { Subject, Observable, of } from 'rxjs';
import { SignupUser } from 'src/app/shared/models/signup-user.model';
import { fakeAsync, flush } from '@angular/core/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let router: Router;
  let fb: FormBuilder;
  const mockForm: FormGroup = mock(FormGroup);
  let authService: AuthService;
  const signup$: Subject<any> = new Subject<any>();

  beforeEach(() => {
    router = mock(Router);
    fb = new FormBuilder();
    authService = mock(AuthService);

    component = new SignupComponent(
      instance(router),
      fb,
      instance(authService),
    );
  });

  describe('A) Nominal case', () => {
    it('1) should create', () => {
      // verify
      expect(component).toBeTruthy();
    });

    it('2) form should be initialized', () => {
      // prepare
      // execute
      component.ngOnInit();
      // verify
      expect(component.form).toBeTruthy();
      expect(component.form.controls.firstName).toBeDefined();
      expect(component.form.controls.lastName).toBeDefined();
      expect(component.form.controls.email).toBeDefined();
      expect(component.form.controls.username).toBeDefined();
      expect(component.form.controls.password).toBeDefined();
    });
    it('3) should signup', () => {
      // prepare
      when(authService.signup(anything())).thenReturn(signup$);
      component.ngOnInit();
      // execute
      component.signup();
      // verify
      expect(component.form.valid).toBeFalsy();
      verify(authService.signup(anything())).never();
    });

    it('4) should signup', () => {
      // prepare
      const formValue = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'user@fakeemail.ng',
        username: 'username',
        password: 'my secret',
      };
      when(authService.signup(anything())).thenReturn(of(anything()));
      component.ngOnInit();
      component.form.setValue(formValue);
      // execute
      component.signup();
      // verify
      expect(component.form.valid).toBeTruthy();
      verify(authService.signup(anything())).once();
      verify(router.navigate(anything())).once();
    });
  });
});
