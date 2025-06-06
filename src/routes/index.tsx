import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const SkipsHiring = lazy(() => import("../pages/skips-hiring"));

const routes: RouteObject[] = [
  {
    path: "skips",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SkipsHiring />
      </Suspense>
    ),
  },
];

export default routes;
