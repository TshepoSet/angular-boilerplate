import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent<T> {
  formAppearance: MatFormFieldAppearance = 'outline'
  @Input() form!: FormControlBase
  @Input() formControls!: FormGroup

  get isValid() {
    const key = this.form.key ?? ''
    return this.formControls.controls[key].valid
  }
}
