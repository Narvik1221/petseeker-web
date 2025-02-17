import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navbar } from "../../widgets/navbar";
import { MAIN_ROUTE } from "./consts";
import { publicRoutes } from "./routes";
const AppRouter: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        {/* убрать main */}
        
          <Routes>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
          </Routes>
       
      </Router>
    </div>
  );
};

export default AppRouter;
