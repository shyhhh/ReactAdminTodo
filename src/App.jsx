import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { DashBoard } from "./pages/DashBoard/DashBoard";

export const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
