import React, { useState } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import useBreakpoint from "./hooks/useBreakpoint";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Category from "./pages/Category";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  const [isClosed, setClosed] = useState<boolean>(true);

  const isStatic = useBreakpoint("sm");

  return (
    <div className="antialiased min-h-screen bg-gray-100 flex max-w-screen-2xl overflow-x-auto">
      <Sidebar isClosed={isClosed} setClosed={setClosed} isStatic={isStatic} />

      <main className="flex flex-col flex-grow min-h-screen w-10/12">
        <Navbar isClosed={isClosed} setClosed={setClosed} isStatic={isStatic} />

        <div className="h-full flex">
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/payments" component={Payments} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/log-out" component={Logout} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
