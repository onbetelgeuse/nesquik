import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class MaskPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const regx = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g;
    const regxSpace = /\s/g;

    if (value) {
      value = value.replace(regxSpace, '');
      return value.replace(regx, '$1 $2 $3 $4 $5');
    }
    return value;
  }
}
