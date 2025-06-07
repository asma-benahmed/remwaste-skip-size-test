import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";

const SkipsHiring = lazy(() => import("../pages/skips-hiring"));

const routes: RouteObject[] = [
  {
    path: PATHS.SKIPS_LIST_PAGE_PATH,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SkipsHiring />
      </Suspense>
    ),
  },
];

export default routes;
