import { Component, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormBase } from '../../models/formBase';
import { TextBox } from '../../models/textbox';
import { DynamicFormTemplateComponent } from '../../components/dynamic-form-template/dynamic-form-template.component';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatButtonModule, DynamicFormTemplateComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  constructor() {}

  ngOnInit() {

  }

  get formMetadata(): FormBase<string>[] {

    const authMetadata = [
      new TextBox({
        value: '',
        key: 'username',
        label: 'Username',
        order: 1,
        type: '',
        controlType: 'text',
        requierd: false
      }),
      new TextBox({
        value: '',
        key: 'password',
        label: 'Password',
        order: 2,
        type: '',
        controlType: 'text',
        requierd: false
      }),
    ];

    return authMetadata.sort((a, b) => a.order - b.order);
  }


}
