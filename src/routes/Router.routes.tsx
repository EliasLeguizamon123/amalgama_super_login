import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.routes";
import Loading from "../pages/Loading/Loading";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));

export default function Router () {
    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}