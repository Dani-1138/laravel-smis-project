import React, { useEffect, useState } from 'react';
import { Switch, Router, Route, Navigate } from 'react-router-dom';
import { Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import AdminComponent from './pages/AdminComponent';
import CoordinatorComponent from './pages/CoordinatorComponent';
import RegistralComponent from './pages/RegistralComponent';
import StudentComponent from './pages/StudentComponent';
import ProtectedRoute from './pages/ProtectedRoute';
import LoginForm from './components/Login';
import { routes } from './routes';
import Dashboard from './components/Dashboard';
import { fetchUsersRequest } from './redux/actions/userAction';
import { loginUser, loginUserRequest } from './redux/actions/roleAction';

const App = () => {
  const [isAuthFetched, setIsAuthFetched] = useState(false);
  const userRole = useSelector(state => state.role.role);
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.role.isAuthenticated)

  useEffect(() => {
    const storedUserRole = JSON.parse(localStorage.getItem('userRole'));
    if (storedUserRole) {
      const res =   dispatch(loginUser(storedUserRole))
      console.log(storedUserRole)
        setIsAuthFetched(true); // Set the flag when authentication data is 
        
    }else {
      
      setIsAuthFetched(true); // Set the flag even if no userRole is stored
    }
  }, [localStorage]);


  // if (!isAuthFetched) {
  //   return <div>Loading...</div>;
  // }
  return (
<BrowserRouter>
  <Routes>
   <Route element={<Navigate replace={true} to="/login" />} path="/" />
    {!userRole[0]?.role && <Route path="/login" element={<LoginForm />} />}
  </Routes>
  {userRole && userRole[0] && userRole[0].role && (<Dashboard userRole={userRole[0]?.role}>
    <Routes>
    {routes.map((route,i) => (
            <React.Fragment key={i}>
              {route.isProtected ? (
                <Route
                  element={
                    <ProtectedRoute allowedRoles={route.allowedRole} userRole={userRole[0]?.role}>
                      {route.element}
                    </ProtectedRoute>
                  }
                  path={route.path}
                />
              ) : (
                <Route element={route.element} path={route.path} />
              )}
            </React.Fragment>
          ))}
        {/* <Route element={<PageNotFound />} path="*" /> */}
        {/* Add a catch-all route to handle unknown routes */}
        <Route path="*" element={<div></div>} />
    </Routes>
    </Dashboard>)}
    </BrowserRouter>
  )
};

export default App;
