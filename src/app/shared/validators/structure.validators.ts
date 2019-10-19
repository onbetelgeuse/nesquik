import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { timer, of } from 'rxjs';
import { FileService } from '../services/file.service';
import { map, switchMap } from 'rxjs/operators';
import { FileDto } from '../models/file.model';

export class StructureValidators {
  public static uniqueName(
    fileService: FileService,
    previous: string = null,
    dueTime: number = 250,
  ): ValidatorFn {
    return (input: AbstractControl): ValidationErrors | null => {
      return timer(dueTime).pipe(
        switchMap(() => {
          const name: string = input.value;
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
}
