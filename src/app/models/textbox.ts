import { FormBase } from "./formBase";


export class TextBox extends FormBase<string> {
  override controlType = 'text';

}
