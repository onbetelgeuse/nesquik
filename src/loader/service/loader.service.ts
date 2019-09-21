import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public readonly isLoading: Subject<boolean> = new Subject<boolean>();
  public get isLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public show(): void {
    this.isLoading.next(true);
  }

  public hide(): void {
    this.isLoading.next(false);
  }
}
