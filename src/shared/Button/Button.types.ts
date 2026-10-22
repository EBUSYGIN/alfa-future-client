import type { IconType } from "@shared/Icon/Icon";

export interface IButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  appearance?: "primary" | "secondary" | "ghost";
  icon?: IconType;
  isDisabled?: boolean;
}
