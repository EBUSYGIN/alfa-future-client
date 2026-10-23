import type { IRangeSliderProps } from "./RangeSlider.types";
import styles from "./RangeSlider.module.css";

const valueFormatters = {
  currency: new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }),
  month: new Intl.NumberFormat("ru-RU", {
    style: "unit",
    unit: "month",
    unitDisplay: "long",
  }),
  year: new Intl.NumberFormat("ru-RU", {
    style: "unit",
    unit: "year",
    unitDisplay: "long",
  }),
};
const numberFormatter = new Intl.NumberFormat("ru-RU");

export function RangeSlider({
  minValue,
  maxValue,
  value,
  name,
  valueUnit,
  ...props
}: IRangeSliderProps) {
  const normalizedMinValue = Math.floor(minValue);
  const normalizedMaxValue = Math.floor(maxValue);

  return (
    <div className={styles.slider}>
      <div className={styles.heading}>
        <span>{name}</span>
        <span className={styles.strong}>
          {valueUnit
            ? valueFormatters[valueUnit].format(value)
            : numberFormatter.format(value)}
        </span>
      </div>
      <input
        {...props}
        className={styles.range}
        type="range"
        min={normalizedMinValue}
        max={normalizedMaxValue}
        name={name}
        aria-label={name}
      />
      <div className={styles.limits} aria-hidden="true">
        <span>Минимум</span>
        <span>Максимум</span>
      </div>
    </div>
  );
}
