import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { FormBase } from '../../models/formBase';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  formAppearance: MatFormFieldAppearance = 'outline'
  @Input() form!: FormBase<string>
  @Input() formControls!: FormGroup

  ngOnInit() {
    console.log("Dynamic form inputs: ", this.form);
    console.log("Dyanmic form controls: ", this.formControls.controls);
  }

  get isValid() {
    const key = this.form.key ?? ''
    return this.formControls.controls[key].valid
  }
}
