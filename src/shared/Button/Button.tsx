import cn from "classnames";

import { Icon } from "@shared/Icon/Icon";
import type { IButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export function Button({
  appearance = "primary",
  icon,
  children,
  isDisabled = false,
  disabled = false,
  ...props
}: IButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(styles.button, styles[appearance])}
      disabled={isDisabled || disabled}
      {...props}
    >
      {IconComponent && <IconComponent />} {children}
    </button>
  );
}
