import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const UserRoutes = () => {
    return (
        <Routes>
        <Route path="/landing" element={<LandingPage />} />
        </Routes>
    );
    };

export default UserRoutes;