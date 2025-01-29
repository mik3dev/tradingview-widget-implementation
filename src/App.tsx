import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";

import SingleChartPage from "./pages/SingleChartPage";
import MultiChartPage from "./pages/MultiChartPage";
import Login from "./pages/Login";
import Callback from "./pages/Callback";


function App() {
  const config: ZitadelConfig = {
    authority: "mik3dev-auttnt.us1.zitadel.cloud",
    client_id: "304796056355439386",
  };

  const zitadel = createZitadelAuth(config);

  function login() {
    zitadel.authorize();
  }

  function signout() {
    zitadel.signout();
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [zitadel]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login authenticated={authenticated} handleLogin={login} />
          }
        />
        <Route
          path="/callback"
          element={
            <Callback
              authenticated={authenticated}
              setAuth={setAuthenticated}
              handleLogout={signout}
              userManager={zitadel.userManager}
            />
          }
        />
        <Route path="/" element={<SingleChartPage />} />
        <Route path="/multi-chart" element={<MultiChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
