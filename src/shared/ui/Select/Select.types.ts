import type { ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  className?: string;
  appearance?: "default" | "compact";
  hideLabel?: boolean;
  prefix?: ReactNode;
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
