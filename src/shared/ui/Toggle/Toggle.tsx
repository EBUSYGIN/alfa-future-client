import cn from "classnames";
import { Field, Label, Switch } from "@headlessui/react";
import styles from "./Toggle.module.css";
import type { ToggleProps } from "./Toggle.types";

export function Toggle({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  name,
  className,
}: ToggleProps) {
  return (
    <Field className={cn(styles.field, className)} disabled={disabled}>
      <Switch
        {...(checked === undefined ? { defaultChecked } : { checked })}
        onChange={onChange}
        name={name}
        className={styles.control}
      >
        <span className={styles.thumb} />
      </Switch>
      <Label className={styles.label}>{label}</Label>
    </Field>
  );
}
