import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleChartPage from "./pages/SingleChartPage";
import MultiChartPage from "./pages/MultiChartPage";
import Callback from "./pages/Callback";
import { Navbar } from "./components/Navbar";
import { useAuthorization } from "./hooks/useAuthorization";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const { isAuthenticated, isLoading } = useAuthorization();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/callback"
          element={
            <Callback />
          }
        />
        <Route path="/" element={<SingleChartPage />} />
        <Route
          path="/multi-chart"
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
  );
}

export default App;