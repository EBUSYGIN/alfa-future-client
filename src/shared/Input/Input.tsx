import cn from "classnames";

import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({
  className,
  label,
  error,
  success,
  disabled,
  ...props
}: InputProps) {
  return (
    <div className={styles.inputBox}>
      <label className={styles.field}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          {...props}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          className={cn(styles.input, className, {
            [styles.invalid]: error,
            [styles.success]: success && !error,
          })}
        />
      </label>
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
      {success && !error && <span className={styles.successMessage}>{success}</span>}
    </div>
  );
}
