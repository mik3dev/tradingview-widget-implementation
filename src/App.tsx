import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleChartPage from "./pages/SingleChartPage";
import MultiChartPage from "./pages/MultiChartPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleChartPage />} />
        <Route path="/multi-chart" element={<MultiChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
