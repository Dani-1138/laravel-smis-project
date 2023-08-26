/* import logo from './logo.svg'; */
// import './App.css';
// import { Routes,Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import AlertBox from './components/AlertBox';

// function App() {
//   return (
//     <>
//       <AlertBox />
//     </>
//   );
// }

// export default App;

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
import { loginUser } from './redux/actions/roleAction';

const App = () => {
  const [isAuthFetched, setIsAuthFetched] = useState(false);
  const userRole = useSelector(state => state.role.role);
  const dispatch = useDispatch()

  useEffect(() => {

    const storedUserRole = JSON.parse(localStorage.getItem('userRole'));
    if (storedUserRole) {
      const res =   dispatch(loginUser(storedUserRole))
        setIsAuthFetched(true); // Set the flag when authentication data is 
        
    }else {
      
      setIsAuthFetched(true); // Set the flag even if no userRole is stored
    }
  }, []);


  // if (!isAuthFetched) {
  //   return <div>Loading...</div>;
  // }
  return (
<BrowserRouter>
  <Routes>
   <Route element={<Navigate replace={true} to="/login" />} path="/" />
   <Route path="/login" element={<LoginForm />} />
  </Routes>
  {isAuthFetched && userRole && userRole[0] && (<Dashboard userRole={userRole[0]?.role}>
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
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    </Dashboard>)}
    </BrowserRouter>
  )
};

export default App;
