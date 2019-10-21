import {
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { timer, of } from 'rxjs';
import { FileService } from '../services/file.service';
import { map, switchMap } from 'rxjs/operators';
import { FileDto } from '../models/file.model';

export class StructureValidators {
  public static uniqueName(
    fileService: FileService,
    previous: string = null,
    dueTime: number = 250,
  ): ValidatorFn | any {
    return (control: AbstractControl): ValidationErrors | null => {
      return timer(dueTime).pipe(
        switchMap(() => {
          const name: string = control.value;
          const isUniqueName: boolean = fileService.files
            .map((file: FileDto) => file.originalname)
            .filter((value: string) => value !== previous)
            .some((value: string) => value === name);

          return of(isUniqueName);
        }),
        map(isUniqueName => (!isUniqueName ? null : { unavailable: true })),
      );
    };
  }

  public static get uniqueImage(): ValidatorFn | any {
    return (control: AbstractControl): ValidationErrors | null => {
      return timer(500).pipe(
        switchMap(() => {
          if (!(control instanceof FormArray)) {
            return of(false);
          }

          const controls: AbstractControl[] = control.controls.filter(
            (formGroup: AbstractControl, index: number) =>
              control.controls.findIndex(
                (searchFormGroup: AbstractControl) =>
                  formGroup.get('name').value ===
                    searchFormGroup.get('name').value &&
                  formGroup.get('filename').value ===
                    searchFormGroup.get('filename').value,
              ) !== index,
          );

          console.log(controls);

          return of(false);
        }),
      );
    };
  }
}
