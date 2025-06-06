import type { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function withRouter(Component: FC) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
