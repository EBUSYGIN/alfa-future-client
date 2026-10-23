export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  className?: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (value: string) => void;
}
