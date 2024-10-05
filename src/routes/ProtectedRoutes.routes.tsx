import { Outlet, Navigate, useLocation } from 'react-router-dom';

const userAuth = () => {
    const user = sessionStorage.getItem('token');
    const isLogged = user ? true : false;

    return user && isLogged;
};

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = userAuth();

    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate state={{ from: location }} to="/login" />
    );
};

export default ProtectedRoutes;