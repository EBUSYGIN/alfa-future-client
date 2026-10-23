import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/home";
import { PlaceholderPage } from "@pages/placeholder";
import { clientRoutes } from "@shared/config";
import { ClientLayout } from "../layouts";

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path={clientRoutes.loans} element={<PlaceholderPage title="Подобрать кредит" />} />
          <Route path={clientRoutes.applications} element={<PlaceholderPage title="Мои заявки" />} />
          <Route path={clientRoutes.company} element={<PlaceholderPage title="Компания" />} />
          <Route path={clientRoutes.help} element={<PlaceholderPage title="Помощь" />} />
          <Route path="*" element={<PlaceholderPage title="Страница не найдена" notFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
