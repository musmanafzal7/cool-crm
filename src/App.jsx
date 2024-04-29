
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomeView from "./Pages/CustomerService/CRM/CRMProduct/CRMProduct";
import { useState } from "react";
import CustomerProjects from "./Pages/CustomerService/CRM/CustomerProjects";
import CUstomerActivities from "./Pages/CustomerService/CRM/CUstomerActivities";


function App() {
  const [extendSearch, setExtendSearch] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout
                extendSearch={extendSearch}
                setExtendSearch={setExtendSearch}
              />
            }
          >
            <Route
              path="/"
              default
              element={
                <HomeView
                  extendSearch={extendSearch}
                  setExtendSearch={setExtendSearch}
                />
              }
            />
            <Route path="/projects" element={<CustomerProjects />} />
            <Route path="/activities" element={<CUstomerActivities />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
