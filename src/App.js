import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormProvider from "./providers/FormProvider";
import { routes } from "./utils/routes";


export default function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
              />
            );
          })}
        </Routes>
      </FormProvider>
    </Router>
 
  );
}
