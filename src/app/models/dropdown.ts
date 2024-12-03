import { FormBase } from "./formBase";

export class Dropdown extends FormBase<string> {
  override controlType = 'dropdown';
}
