import { useState } from "react";
import { Badge, RangeSlider } from "@shared/ui";
import "./HomePage.css";

export function HomePage() {
  const [value, setValue] = useState(Math.floor(1900000 + 700000));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  };

  return (
    <div className="home-page">
      <section className="home-page__slider" aria-label="Слайдер">
        <RangeSlider
          minValue={700000}
          maxValue={1900000}
          value={value}
          onChange={handleChange}
          name="Сумма кредита"
          valueUnit="currency"
        />
      </section>
      <section className="home-page__badges" aria-label="Статусы">
        <Badge variant="info">Проверка</Badge>
        <Badge variant="warning">Ручная проверка</Badge>
        <Badge variant="success">Одобрена</Badge>
        <Badge variant="error">Отказ</Badge>
      </section>
    </div>
  );
}
