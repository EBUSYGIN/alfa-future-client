import { Outlet } from "react-router";
import { ClientHeader } from "@widgets/client-header";
import { ClientSidebar } from "@widgets/client-sidebar";
import { Container } from "@shared/ui";
import styles from "./ClientLayout.module.css";

const organizations = [{ value: "romashka", label: 'ООО «Ромашка»' }];

export function ClientLayout() {
  return (
    <div className={styles.layout}>
      <a className={styles.skipLink} href="#client-content">Перейти к содержимому</a>
      <ClientHeader userName="Анна Смирнова" organizations={organizations} />
      <div className={styles.body}>
        <ClientSidebar />
        <main id="client-content" className={styles.main} tabIndex={-1}>
          <Container className={styles.content}>
            <Outlet />
          </Container>
        </main>
      </div>
    </div>
  );
}
