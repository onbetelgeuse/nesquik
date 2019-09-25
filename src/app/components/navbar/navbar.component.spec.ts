import { NavbarComponent } from './navbar.component';
import { fakeAsync, tick } from '@angular/core/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;

  beforeEach(() => {
    component = new NavbarComponent();
  });

  describe('A) Nominal case', () => {
    it('1) should create', () => {
      expect(component).toBeTruthy();
    });

    it('2) now should be defined after 500ms', fakeAsync(() => {
      // execute
      component.ngOnInit();
      tick(500);
      expect(component.now).toBeDefined();
      // verify
      component.ngOnDestroy();
    }));
  });
});
