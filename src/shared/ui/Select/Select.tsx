import { useEffect, useRef } from "react";
import cn from "classnames";
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ChevronDown from "@assets/images/icons/chevron-down.svg?react";
import styles from "./Select.module.css";
import type { SelectProps } from "./Select.types";

export function Select({
  className,
  appearance = "default",
  hideLabel = false,
  prefix,
  label,
  options,
  placeholder = "Выберите значение",
  value,
  defaultValue = "",
  defaultOpen = false,
  disabled = false,
  onChange,
  name,
}: SelectProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const openedInitially = useRef(false);

  useEffect(() => {
    if (defaultOpen && !disabled && !openedInitially.current) {
      openedInitially.current = true;
      buttonRef.current?.click();
    }
  }, [defaultOpen, disabled]);

  return (
    <Field className={cn(styles.field, appearance === "compact" && styles.compact, className)}>
      <Label className={cn(styles.label, hideLabel && styles.visuallyHidden)}>{label}</Label>
      <Listbox
        {...(value === undefined ? { defaultValue } : { value })}
        disabled={disabled}
        onChange={onChange}
        name={name}
      >
        {({ value }) => (
          <div className={styles.control}>
            <ListboxButton ref={buttonRef} className={styles.button}>
              {prefix && <span className={styles.prefix} aria-hidden="true">{prefix}</span>}
              <span className={styles.value}>
                {options.find((option) => option.value === value)?.label ??
                  placeholder}
              </span>
              <ChevronDown className={styles.icon} aria-hidden="true" />
            </ListboxButton>
            <ListboxOptions
              anchor={appearance === "compact" ? "bottom start" : undefined}
              className={cn(styles.options, appearance === "compact" && styles.floatingOptions)}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className={styles.option}
                >
                  <>{option.label}</>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        )}
      </Listbox>
    </Field>
  );
}
