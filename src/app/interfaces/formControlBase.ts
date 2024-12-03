export interface FormControlBase <T> {
  value?: T | undefined;
  key?: string;
  label?: string;
  order?: number;
  type?: string;
  controlType?: string;
  placeholder?: string;
}
