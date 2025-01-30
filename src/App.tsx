import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleChartPage from "./pages/SingleChartPage";
import MultiChartPage from "./pages/MultiChartPage";
import Callback from "./pages/Callback";
import { useAuthorization } from "./hooks/useAuthorization";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { MainMenu } from "./components/MainMenu";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const { isAuthenticated, isLoading } = useAuthorization();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route
            path="/callback"
            element={
              <Callback />
            }
          />
          <Route path="/" element={<SingleChartPage />} />
          <Route
            path="/multi-charts"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              >
                <MultiChartPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;