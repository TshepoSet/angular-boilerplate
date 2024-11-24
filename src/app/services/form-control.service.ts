import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup<T extends FormControlBase>(formControls: T[]):FormGroup {
    const group: any = {};

    formControls.forEach(control => {
      group[control.key] = control.required ? control.required : '';
    });
    return new FormGroup(group);
  }
}
