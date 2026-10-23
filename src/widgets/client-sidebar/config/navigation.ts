import { clientRoutes } from "@shared/config";

export const navigationItems = [
  { to: clientRoutes.overview, label: "Обзор", icon: "LayoutDashboard", end: true },
  { to: clientRoutes.loans, label: "Подобрать кредит", icon: "Wallet" },
  { to: clientRoutes.applications, label: "Мои заявки", icon: "Files" },
  { to: clientRoutes.company, label: "Компания", icon: "Building2" },
  { to: clientRoutes.help, label: "Помощь", icon: "CircleHelp" },
] as const;
