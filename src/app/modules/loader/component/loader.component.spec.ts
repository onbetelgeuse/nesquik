import { LoaderComponent } from './loader.component';
import { LoaderService } from '../service/loader.service';
import { mock, instance } from 'ts-mockito';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let service: LoaderService;

  beforeEach(() => {
    service = mock(LoaderService);

    component = new LoaderComponent(instance(service));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
