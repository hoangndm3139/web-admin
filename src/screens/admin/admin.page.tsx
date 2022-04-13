import React from "react";
import { Switch } from "react-router-dom";
import { PAGE_ROUTE } from "../../constants/route";

import AuthRouter from "../../components/auth/auth-route";
import MainLayout from "../../components/layout-admin/main-layout";

// import AdminCategory from "./admin-category";
// import AdminProduct from "./admin-product";
// import AdminProfile from "./admin-profile";

const AdminCategory = React.lazy(
  () => import("../../screens/admin/admin-staff")
);
const AdminSalary = React.lazy(
  () => import("../../screens/admin/admin-salary")
);
const AdminCheckin = React.lazy(
  () => import("../../screens/admin/admin-checkin")
);
const AdminRoom = React.lazy(
  () => import("../../screens/admin/admin-room")
);
const AdminMode = React.lazy(
  () => import("../../screens/admin/admin-mode")
);
const AdminSense = React.lazy(
  () => import("../../screens/admin/admin-sense")
);
const AdminAddStaff = React.lazy(
  () => import("../../screens/admin/admin-add-staff")
);
const AdminAddSalary = React.lazy(
  () => import("../../screens/admin/admin-add-salary")
);
const AdminAddRoom = React.lazy(
  () => import("../../screens/admin/admin-add-room")
);
const AdminAddMode = React.lazy(
  () => import("../../screens/admin/admin-add-mode")
);
const AdminPage = () => {
  return (
    <Switch>
      <MainLayout>
        {/*Default page*/}
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_CATEGORY}
          component={AdminCategory}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_SALARY}
          component={AdminSalary}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_CHECKIN}
          component={AdminCheckin}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_ROOM}
          component={AdminRoom}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_MODE}
          component={AdminMode}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.MANAGE_SENSE}
          component={AdminSense}
          exact
        />
        <AuthRouter
          path={PAGE_ROUTE.ADD_STAFF}
          component={AdminAddStaff}
          exact
        />
         <AuthRouter
          path={PAGE_ROUTE.ADD_SALARY}
          component={AdminAddSalary}
          exact
        />
         <AuthRouter
          path={PAGE_ROUTE.ADD_ROOM}
          component={AdminAddRoom}
          exact
        />
          <AuthRouter
          path={PAGE_ROUTE.ADD_MODE}
          component={AdminAddMode}
          exact
        />
      </MainLayout>
    </Switch>
  );
};

export default AdminPage;
