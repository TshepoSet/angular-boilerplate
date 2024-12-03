export class FormBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  order: number;
  type: string;
  controlType: string;
  placeholder: string;
  required?: boolean;
  options?: { key: string, value: string }[];


  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    order?: number,
    type?: string,
    controlType?: string
    placeholder?: string
    requierd?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.required = options.requierd || false;
  }
}
