import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authRoutes } from "./app/modules/auth/auth.rotes";
import LoginPage from "./app/modules/auth/login.page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={authRoutes.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
