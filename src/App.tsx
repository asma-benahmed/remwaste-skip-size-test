import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import routes from "./routes";
import MainLayout from "./layout";
import NotFound from "./pages/404";

const basePath = "app";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={basePath} />} />
        <Route path={basePath} element={<MainLayout />}>
          <Route index element={<Navigate to="skips" />} />
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
