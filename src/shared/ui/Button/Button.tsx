import cn from "classnames";

import { Icon } from "../Icon/Icon";
import styles from "./Button.module.css";
import type { IButtonProps } from "./Button.types";

export function Button({
  appearance = "primary",
  icon,
  children,
  className,
  isDisabled = false,
  disabled = false,
  ...props
}: IButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(styles.button, styles[appearance], className)}
      disabled={isDisabled || disabled}
      {...props}
    >
      {IconComponent && <IconComponent />} {children}
    </button>
  );
}
