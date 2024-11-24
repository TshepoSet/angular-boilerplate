export class Auth implements FormControlBase{
  value: string | undefined;
  key: string;
  label: string;
  order: number;
  type: string;
  controlType: string;


  constructor(options: {
    value?: string,
    key?: string,
    label?: string,
    order?: number,
    type?: string,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.controlType = options.controlType || '';
  }
}
