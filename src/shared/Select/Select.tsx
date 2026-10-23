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
    <Field className={cn(styles.field, className)}>
      <Label className={styles.label}>{label}</Label>
      <Listbox
        {...(value === undefined ? { defaultValue } : { value })}
        disabled={disabled}
        onChange={onChange}
        name={name}
      >
        {({ value }) => (
          <div className={styles.control}>
            <ListboxButton ref={buttonRef} className={styles.button}>
              <span>
                {options.find((option) => option.value === value)?.label ??
                  placeholder}
              </span>
              <ChevronDown className={styles.icon} aria-hidden="true" />
            </ListboxButton>
            <ListboxOptions className={styles.options}>
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
