// import { DiasporaPage } from 'app/pages/DiasporaPage/Loadable';
// import { IRoute } from './types';
// import { AdminBanksPage } from 'app/pages/Bankspage/Loadable';
// import { AdminPhoneOperatorPage } from 'app/pages/AdminPhoneOperator/Loadable';

import AddNewStudent from "./components/AddNewStudent";
import AddNewUser from "./components/AddUser";
import AssignDepartment from "./components/AssignDepartment";
import Complain from "./components/Complain";
import Dashboard from "./components/Dashboard";
import ExamForm from "./components/ExamForm";
import StudentPlacement from "./components/Placement";
import StudentDashboard from "./components/StudentDashboard";
import RegistralDashboardComponent from "./components/RegistralDashboard";
import ResetPassword from "./components/ResetPassword";
import ViewDepartmentTable from "./components/ViewDepartment";
import ViewStudentTable from "./components/ViewStudentTable";
import ComplainDetail from "./components/complainDetail";
import BasicSelect from "./components/departmentChoice";
import Quiz from "./components/quize";
import UpdateStudent from "./components/updateSudent";
import StudentDetail from "./components/StudentDetailPage";

// import { DiasporaDetailPage } from 'app/pages/DiasporaDetailPage/Loadable';
// import { AdminPhoneOperatorDetailPage } from 'app/pages/AdminPhoneOperatorDetailPage/Loadable';
// import { AdminLoanOfferPage } from 'app/pages/AdminLoanOfferPage/Loadable';
// import { PageNotFound } from 'app/components/PageNotFound';
// import { AdminBanksDetailPage } from 'app/pages/BankDetailsPage/Loadable';
// import { AdminLoanOfferDetailPage } from 'app/pages/AdminLoanOfferDetailPage/Loadable';
// import { AdminScheduledPage } from 'app/pages/AdminScheduledPage/Loadable';
// import { BanksLoanRequestPage } from 'app/pages/BanksLoanRequestPage/Loadable';
// import { BanksLoanOfferPage } from 'app/pages/BanksLoanOfferPage/Loadable';
// import { BanksLoanRequestDetailPage } from 'app/pages/BanksLoanRequestDetailPage/Loadable';
// import { BankLoanOfferDetailPage } from 'app/pages/BankLoanOfferDetailPage/Loadable';
// import { PhoneOperatorLoanRequestPage } from 'app/pages/PhoneOperatorLoanRequestPage/Loadable';
// import { PhoneOperatorLoanRequestDetailPage } from 'app/pages/PhoneOperatorLoanRequestDetailPage/Loadable';
// import { PhoneOperatorScheduledPage } from 'app/pages/PhoneOperatorScheduledPage/Loadable';
// import { AdminCreateRolesPage } from 'app/pages/AdminCreateRolesPage/Loadable';
// import { AdminDiasporaOfferPage } from 'app/pages/AdminDiasporaOfferPage/Loadable';
// import ActivationPage from 'app/pages/ActivationPage';
// import { DesignSystemPage } from 'app/pages/DesignSystemPage/Loadable';
// import ResetPasswordPage from 'app/pages/ResetPasswordPage';
// import { ForgotPasswordPage } from 'app/pages/ForgotPasswordPage';
// import { AdminDashboardPage } from 'app/pages/AdminDashboardPage';

export const routes = [
  // {
  //   element: <RegistralDashboardComponent/>,
  //   exact: true,
  //   path: '/dashboard',
  //   isProtected: true,
  //   allowedRole: 'admin',
  // },
  // {
  //   element: <StudentDashboard/>,
  //   exact: true,
  //   path: '/dashboard',
  //   isProtected: true,
  //   allowedRole: 'admin',
  // },
  {
    element: <RegistralDashboardComponent/>,
    exact: true,
    path: '/dashboard',
    isProtected: true,
    allowedRole: 'admin',
  },
  // {
  //   element: <RegistralDashboardComponent/>,
  //   exact: true,
  //   path: '/dashboard',
  //   isProtected: true,
  //   allowedRole: 'coordinator',
  // },
  // {
  //   element: <ViewStudentTable />,
  //   exact: true,
  //   path: '/view-student',
  //   isProtected: true,
  //   allowedRole: 'admin',
  // },
  {
    element: <ViewStudentTable />,
    exact: true,
    path: '/view-student',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <ViewStudentTable />,
    exact: true,
    path: '/view-student',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AddNewStudent />,
    exact: true,
    path: '/add-student',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <Quiz />,
    exact: true,
    path: '/quize',
    isProtected: true,
    allowedRole: 'student',
  },
  {
    element: <ExamForm />,
    exact: true,
    path: '/exam',
    isProtected: true,
    allowedRole: 'coordinator',
  },
  {
    element: <AssignDepartment />,
    exact: true,
    path: '/assign-department',
    isProtected: true,
    allowedRole: 'coordinator',
  },
  {
    element: <ViewDepartmentTable />,
    exact: true,
    path: '/department',
    isProtected: true,
    allowedRole: 'coordinator',
  },
  {
    element: <UpdateStudent />,
    exact: true,
    path: '/update-student',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <AddNewStudent />,
    exact: true,
    path: '/add-user',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <BasicSelect />,
    exact: true,
    path: '/department-choice',
    isProtected: true,
    allowedRole: 'student',
  },
  {
    element: <Complain />,
    exact: true,
    path: '/student/complain',
    isProtected: true,
    allowedRole: 'student',
  },
  {
    element: <ComplainDetail />,
    exact: true,
    path: '/complain-detail',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <StudentPlacement />,
    exact: true,
    path: '/placement',
    isProtected: true,
    allowedRole: 'student',
  },
  {
    element: <ResetPassword />,
    exact: true,
    path: '/reset-password',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <ComplainDetail />,
    exact: true,
    path: '/complain-detail',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <AddNewUser />,
    exact: true,
    path: '/add-user',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <UpdateStudent />,
    exact: true,
    path: '/update-student/:student_id',
    isProtected: true,
    allowedRole: 'registral',
  },
  {
    element: <StudentDetail />,
    exact: true,
    path: '/student-detail/:id',
    isProtected: true,
    allowedRole: 'admin',
  }
  // {
  //   element: <AdminCreateRolesPage />,
  //   exact: true,
  //   path: '/admin/user/:Id', 
  //   isProtected: true,
  //   allowedRole: 'admin',
  // },
//   {
//     element: <AdminPhoneOperatorPage />,
//     exact: true,
//     path: '/admin/operators',
//     isProtected: true,
//     allowedRole: 'admin',
//   },
//   {
//     element: <AdminPhoneOperatorPage />,
//     exact: true,
//     path: '/admin/operators/:pageNo',
//     isProtected: true,
//     allowedRole: 'admin',
//   },
//   {
//     element: <AdminLoanOfferPage />,
//     exact: true,
//     path: '/admin/offers',
//     isProtected: true,
//     allowedRole: 'admin',
//   },
//   {
//     element: <AdminLoanOfferPage />,
//     exact: true,
//     path: '/admin/offers/:pageNo',
//     isProtected: true,
//     allowedRole: 'admin',
//   },
//   {
//     element: <AdminLoanOfferDetailPage />,
//     exact: true,
//     path: '/admin/offer/:id',
//     isProtected: true,
//     allowedRole: 'admin',
//   },
//   {
//     element: <></>,
//     exact: true,
//     path: '/bank/dashboard',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BanksLoanRequestPage />,
//     exact: true,
//     path: '/bank/requests',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BanksLoanRequestPage />,
//     exact: true,
//     path: '/bank/requests/:pageNo',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BanksLoanRequestDetailPage />,
//     exact: true,
//     path: '/bank/request/:requestId',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BanksLoanOfferPage />,
//     exact: true,
//     path: '/bank/offers',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BanksLoanOfferPage />,
//     exact: true,
//     path: '/bank/offers/:pageNo',
//     isProtected: true,
//     allowedRole: 'bank',
//   },
//   {
//     element: <BankLoanOfferDetailPage />,
//     exact: true,
//     path: '/bank/offer/:offerId',
//     isProtected: true,
//     allowedRole: 'bank',
//   },

//   {
//     element: <></>,
//     exact: true,
//     path: '/telephonist/dashboard',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },
//   {
//     element: <PhoneOperatorLoanRequestPage />,
//     exact: true,
//     path: '/telephonist/requests',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },
//   {
//     element: <PhoneOperatorLoanRequestPage />,
//     exact: true,
//     path: '/telephonist/requests/:pageNo',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },
//   {
//     element: <PhoneOperatorLoanRequestDetailPage />,
//     exact: true,
//     path: '/telephonist/request/:id',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },
//   {
//     element: <PhoneOperatorScheduledPage />,
//     exact: true,
//     path: '/telephonist/scheduled',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },

//   {
//     element: <PhoneOperatorScheduledPage />,
//     exact: true,
//     path: '/telephonist/scheduled/:pageNo',
//     isProtected: true,
//     allowedRole: 'telephonist',
//   },
//   {
//     element: <PageNotFound />,
//     exact: true,
//     path: '/notfound',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <ActivationPage />,
//     exact: true,
//     path: '/activate',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <DesignSystemPage />,
//     exact: true,
//     path: '/design',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <ResetPasswordPage />,
//     exact: true,
//     path: '/reset-password',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <ForgotPasswordPage />,
//     exact: true,
//     path: '/forgot-password',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <DesignSystemPage />,
//     exact: true,
//     path: '/design',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <ResetPasswordPage />,
//     exact: true,
//     path: '/reset-password',
//     isProtected: false,
//     allowedRole: '*',
//   },
//   {
//     element: <ForgotPasswordPage />,
//     exact: true,
//     path: '/forgot-password',
//     isProtected: false,
//     allowedRole: '*',
//   },
  
];
