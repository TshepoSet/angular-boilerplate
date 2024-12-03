import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../models/formBase';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControlService } from '../../services/form-control.service';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic-form-template',
  imports: [ReactiveFormsModule, CommonModule, DynamicFormComponent, MatButtonModule],
  templateUrl: './dynamic-form-template.component.html',
  styleUrl: './dynamic-form-template.component.scss'
})
export class DynamicFormTemplateComponent implements OnInit {
  @Input() formInputs: FormBase<string>[] = [];
  form!: FormGroup;
  payload = '';

  constructor(private formService: FormControlService) {}

  ngOnInit(): void {
    console.log("Form Inputs: ", this.formInputs);
    this.form = this.formService.toFormGroup(this.formInputs);
    console.log("Form: ", this.form.controls );
  }

  onSubmit(): void {
    this.payload = JSON.stringify(this.form.getRawValue());
  }

}
