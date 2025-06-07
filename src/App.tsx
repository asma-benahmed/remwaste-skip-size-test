import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import routes from "./routes";
import MainLayout from "./layout";
import NotFound from "./pages/404";
import { PATHS } from "./routes/paths";

const basePath = "app";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={basePath} />} />
        <Route path={basePath} element={<MainLayout />}>
          <Route index element={<Navigate to={PATHS.SKIPS_LIST_PAGE_PATH} />} />
          <Route path="*" element={<NotFound />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
