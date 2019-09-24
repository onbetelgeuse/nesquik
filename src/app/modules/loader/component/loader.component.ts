import { Component } from '@angular/core';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  public color = 'primary';
  public mode = 'indeterminate';
  public value = 50;
  public isLoading = this.loaderService.isLoading;

  constructor(private readonly loaderService: LoaderService) {}
}
