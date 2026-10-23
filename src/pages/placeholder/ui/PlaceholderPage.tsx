import { Link } from "react-router";
import { clientRoutes } from "@shared/config";
import styles from "./PlaceholderPage.module.css";

interface PlaceholderPageProps {
  title: string;
  notFound?: boolean;
}

export function PlaceholderPage({ title, notFound = false }: PlaceholderPageProps) {
  return (
    <section className={styles.page}>
      <h1>{title}</h1>
      <p>{notFound ? "Проверьте адрес или вернитесь к обзору." : "Раздел пока в разработке."}</p>
      {notFound && <Link to={clientRoutes.overview}>Перейти к обзору</Link>}
    </section>
  );
}
