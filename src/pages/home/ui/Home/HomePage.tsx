import { Button } from "@shared/index";
import "./HomePage.css";

const appearances = ["primary", "secondary", "ghost"] as const;

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__content" aria-labelledby="buttons-title">
        <h1 id="buttons-title">Кнопки</h1>
        <div className="home-page__variants">
          {appearances.map((appearance) => (
            <div className="home-page__variant" key={appearance}>
              <h2>{appearance}</h2>
              <div className="home-page__buttons">
                <Button appearance={appearance}>Продолжить</Button>
                <Button appearance={appearance} isDisabled>
                  Недоступно
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
