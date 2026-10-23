import cn from "classnames";
import styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

export function Badge({ children, variant }: BadgeProps) {
  return <div className={cn(styles.badge, styles[variant])}>{children}</div>;
}
