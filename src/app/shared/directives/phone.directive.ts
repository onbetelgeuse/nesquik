import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[phone]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneDirective),
      multi: true,
    },
  ],
})
export class PhoneDirective implements ControlValueAccessor {
  public onChange = (_: any) => {};
  @HostListener('blur') public onTouched = () => {};
  constructor(
    private readonly renderer: Renderer2,
    private elementRef: ElementRef,
  ) {}

  public writeValue(value: string): void {
    const transformed: string | undefined = this.transform(value);

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'value',
      transformed,
    );
  }
  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'disabled',
      isDisabled,
    );
  }
  @HostListener('input', ['$event.target.value'])
  public handleInput(value: string) {
    value = value.replace(/\s+/g, '');
    const transformed: string | undefined = this.transform(value);

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'value',
      transformed,
    );
    this.onChange(value);
  }

  private transform(value: string): string | undefined {
    let transformed: string | undefined = value;

    if (value.length <= 2) {
      transformed = value.replace(/(\d{0,2})/, '$1');
    } else if (value.length <= 4) {
      transformed = value.replace(/(\d{0,2})(\d{0,2})/, '$1 $2');
    } else if (value.length <= 6) {
      transformed = value.replace(/(\d{0,2})(\d{0,2})(\d{0,2})/, '$1 $2 $3');
    } else if (value.length <= 8) {
      transformed = value.replace(
        /(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/,
        '$1 $2 $3 $4',
      );
    } else {
      transformed = value.replace(
        /(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/,
        '$1 $2 $3 $4 $5',
      );
    }
    return transformed;
  }
}
