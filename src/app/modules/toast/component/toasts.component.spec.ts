import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component';
import { ToastService } from '../service/toast.service';
import { mock, instance } from 'ts-mockito';

describe('ToastsComponent', () => {
  let component: ToastsComponent;
  let toastService: ToastService;

  beforeEach(() => {
    toastService = mock(ToastService);
    component = new ToastsComponent(instance(toastService));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
