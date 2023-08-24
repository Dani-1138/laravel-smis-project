import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import StudentComponent from './StudentComponent';
import CoordinatorComponent from './CoordinatorComponent';
import RegistralComponent from './RegistralComponent';
import AdminComponent from './AdminComponent';

const ProtectedRoute = ({ allowedRoles, ...rest }) => {
  const userRole = useSelector(state => state.user.role);

  if (allowedRoles.includes(userRole)) {
    switch (userRole) {
      case 'student':
        return <Route {...rest} component={StudentComponent} />;
      case 'coordinator':
        return <Route {...rest} component={CoordinatorComponent} />;
      case 'registral':
        return <Route {...rest} component={RegistralComponent} />;
      case 'admin':
        return <Route {...rest} component={AdminComponent} />;
      default:
        return <Redirect to="/unauthorized" />;
    }
  } else {
    return <Redirect to="/unauthorized" />;
  }
};

// Usage example in your App.js or routes file:
<ProtectedRoute
  allowedRoles={['student', 'coordinator', 'registral', 'admin']}
  path="/protected-route"
/>