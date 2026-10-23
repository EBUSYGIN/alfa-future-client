export interface CheckboxProps {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  className?: string;
}
