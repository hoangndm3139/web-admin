import React from "react";
import { Route, RouteProps } from "react-router-dom";

interface IAuthRouter {
  path: string;
  component?: React.ComponentType;
  children?: React.ReactElement;
}

const AuthRouter = ({
  path,
  component,
  children,
  ...props
}: IAuthRouter & RouteProps) => {
  return (
    <Route path={path} component={component} {...props}>
      {children}
    </Route>
  );
};

export default AuthRouter;
