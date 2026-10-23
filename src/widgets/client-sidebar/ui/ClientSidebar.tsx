import cn from "classnames";
import { NavLink } from "react-router";
import { Icon } from "@shared/ui";
import { navigationItems } from "../config/navigation";
import styles from "./ClientSidebar.module.css";

export function ClientSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Клиентский кабинет">
      <p className={styles.caption}>Мой бизнес</p>
      <nav aria-label="Основная навигация">
        <ul className={styles.navigation}>
          {navigationItems.map((item) => {
            const NavigationIcon = Icon[item.icon];

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={"end" in item && item.end}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  <span className={styles.icon} aria-hidden="true"><NavigationIcon /></span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
