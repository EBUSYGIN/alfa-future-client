import cn from "classnames";
import { Checkbox as HeadlessCheckbox, Field, Label } from "@headlessui/react";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  error,
  name,
  className,
}: CheckboxProps) {
  return (
    <Field className={cn(styles.field, className)} disabled={disabled}>
      <HeadlessCheckbox
        {...(checked === undefined ? { defaultChecked } : { checked })}
        onChange={onChange}
        name={name}
        className={cn(styles.control, { [styles.error]: error })}
        aria-invalid={error || undefined}
      >
        <span className={styles.check} aria-hidden="true">✓</span>
      </HeadlessCheckbox>
      <Label className={styles.label}>{label}</Label>
    </Field>
  );
}
