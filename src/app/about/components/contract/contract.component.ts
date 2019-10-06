import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent implements OnInit {
  public phone = '042026    1518';
  public form: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({ phone: ['0613385613', Validators.required] });
  }
}
