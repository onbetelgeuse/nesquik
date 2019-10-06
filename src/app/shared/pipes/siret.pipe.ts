import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siret'
})
export class SiretPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
