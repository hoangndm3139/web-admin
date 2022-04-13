import React, { FC, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/auth/login";
import { PAGE_ROUTE } from "constants/route";
import AuthRouter from "components/auth/auth-route";
import AdminPage from "screens/admin/admin.page";
import { Spin } from "antd";


const App: FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Spin className="fallback-loading" />}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>    
          <AuthRouter path={PAGE_ROUTE.ADMIN} component={AdminPage} />
         
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
