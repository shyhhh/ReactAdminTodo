import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Calendar } from "./pages/Calendar/Calendar";
import { BoardPage } from "./pages/Board/Board";
import { DashBoard } from "./pages/DashBoard/DashBoard";
import { DataGrid } from "./pages/DataGrid/DataGrid";

export const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="users" element={<DataGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
