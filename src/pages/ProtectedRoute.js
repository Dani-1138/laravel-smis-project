import { Route } from 'react-router-dom';
import  {Navigate}  from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, userRole,children }) => {
  if (allowedRoles.includes(userRole)) {
    // return <Route {...rest} />;
    return <>{children}</>;
  } else {
    // return <Redirect to="/unauthorized" />;
    return Navigate("/login");
  }
};

export default ProtectedRoute;