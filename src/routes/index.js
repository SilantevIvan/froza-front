import { lazy } from "react";

const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Products = lazy(() => import("../pages/protected/Products"));

const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
