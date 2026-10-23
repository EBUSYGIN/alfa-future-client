import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router";
import { Button, Container, Icon, Select } from "@shared/ui";
import type { ClientHeaderProps } from "./ClientHeader.types";
import styles from "./ClientHeader.module.css";

const clientRoles = [{ value: "client", label: "Клиент" }];

export function ClientHeader({
  userName,
  organizations,
  organizationId,
  onOrganizationChange,
  notifications = [],
}: ClientHeaderProps) {
  const initials = userName.trim().split(/\s+/u).slice(0, 2)
    .map((part) => part.charAt(0)).join("").toLocaleUpperCase("ru-RU");

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to="/" className={styles.brand} aria-label="Альфа Будущее — главная">
          <span className={styles.brandName}>АЛЬФА БУДУЩЕЕ</span>
          <span className={styles.brandCaption}>КРЕДИТНЫЙ КАБИНЕТ · ALFA FUTURE</span>
        </Link>

        <Select
          className={styles.organization}
          appearance="compact"
          hideLabel
          label="Организация"
          prefix={<Icon.Building2 />}
          options={organizations}
          value={organizationId}
          defaultValue={organizations[0]?.value}
          onChange={onOrganizationChange}
          placeholder="Нет организаций"
          disabled={organizations.length === 0}
        />

        <div className={styles.actions}>
          <Select
            className={styles.role}
            appearance="compact"
            hideLabel
            label="Текущая роль"
            prefix="Роль"
            options={clientRoles}
            value="client"
          />

          <Popover>
            <PopoverButton
              as={Button}
              appearance="ghost"
              className={styles.notifications}
              aria-label={notifications.length ? `Уведомления: ${notifications.length}` : "Уведомления"}
            >
              <Icon.Bell aria-hidden="true" />
              {notifications.length > 0 && <span className={styles.notificationDot} />}
            </PopoverButton>
            <PopoverPanel anchor="bottom end" className={styles.notificationPanel}>
              <h2>Уведомления</h2>
              {notifications.length ? (
                <ul>{notifications.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
              ) : <p>Новых уведомлений нет</p>}
            </PopoverPanel>
          </Popover>

          <div className={styles.profile}>
            <span className={styles.avatar} aria-hidden="true">{initials}</span>
            <span className={styles.userName}>{userName}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
