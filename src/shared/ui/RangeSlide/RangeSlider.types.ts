export interface IRangeSliderProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  minValue: number;
  maxValue: number;
  value: number;
  name: string;
  valueUnit?: "currency" | "month" | "year";
}
