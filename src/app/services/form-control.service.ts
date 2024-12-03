import { Injectable } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from '../interfaces/formControlBase';
import { FormBase } from '../models/formBase';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor() {}

  toFormGroup(formControls: FormBase<string>[]): FormGroup {
    const group: any = {};

    formControls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
