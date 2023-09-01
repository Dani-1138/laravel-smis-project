import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RegistralDashboardComponent from './RegistralDashboard';
import ViewStudentTable from './ViewStudentTable';
import AddNewStudent from './AddNewStudent';
import Quiz from './quize';
import { Link } from 'react-router-dom';
import ExamForm from './ExamForm';
import ViewDepartmentTable from './ViewDepartment';
import UpdateStudent from './updateSudent';
import AddNewUser from './AddUser';
import BasicSelect from './departmentChoice';
import Complain from './Complain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplainsRequest } from '../redux/actions/complainAction';
import ComplainDetail from './complainDetail';
import ComplainModal from './complainModal';
import StudentPlacement from './Placement';
import {IoIosPeople } from 'react-icons/io'
import {GoPersonAdd } from 'react-icons/go'
import {TbWriting } from 'react-icons/tb'
import {MdLockReset } from 'react-icons/md'
import {PiExamLight } from 'react-icons/pi'
import {GiArchiveRegister } from 'react-icons/gi'
import {FcDepartment } from 'react-icons/fc'
import { loginUser } from '../redux/actions/roleAction';


function Dashboard({userRole, children}) {
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const dispatch = useDispatch()
    const complains = useSelector(state => state.complains.complains);
    const user = useSelector(state => state.role.role);
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchComplainsRequest())
    }, [])

    const handleShow = () => setShow(true);
    const handleClose = () =>{
        setShow(false);
    }

    useEffect(()=>{
        dispatch(loginUser(JSON.parse(localStorage.getItem('userRole'))));

    },[])

    const handleLogout=()=>{
        dispatch(loginUser([]));
        localStorage.clear();
        navigate('/');
    }

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
 const imgs = 'https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png'
    return (
        <div>
            <body id="page-top" >

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper" >

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar" >

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon ">
                                {/* logo */}
                            </div>
                            <div className="sidebar-brand-text mx-3"><img src={imgs} style={{width: '3rem', height: '3rem', marginRight: '.5rem'}}/>AMU</div>
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                            </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        {userRole == "admin" && <li className="nav-item active">
                            <Link to="/dashboard" className="nav-link" >
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></Link>
                        </li>}
                        {userRole == "student" && <li className="nav-item">
                            <Link to="/stu-dashboard" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-tachometer-alt" style={{height: '2rem', width: '2rem'}}></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>}
                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        {userRole == "registral" && <li className="nav-item">
                            <Link to="/view-student" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                {/* <i className="fas fa-fw fa-cog"></i> */}
                                <IoIosPeople />
                                <span>View Students</span>
                            </Link>
                        </li>}
                        {userRole == "admin" && <li className="nav-item">
                            <Link to="/view-student" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                {/* <i className="fas fa-fw fa-cog"></i> */}
                                <IoIosPeople style={{height: '2rem', width: '2rem'}} />
                                <span>Qualified Students</span>
                            </Link>
                        </li>}

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        {userRole == "registral" && <li className="nav-item">
                            <Link to="/add-student" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                {/* <i className="fas fa-fw fa-wrench"></i> */}
                                <GiArchiveRegister style={{height: '2rem', width: '2rem'}} />
                                <span>Register Students</span>
                            </Link>
                        </li>}


                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        {userRole == "registral" && <li className="nav-item">
                            <Link to="/department" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                
                                <FcDepartment style={{height: '2rem', width: '2rem'}} />
                                <span>Departments</span>
                            </Link>
                        </li>}
                        {userRole=="coordinator" && <li className="nav-item">
                            <Link to="/department" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <FcDepartment style={{height: '2rem', width: '2rem'}} />
                                <span>Departments</span>
                            </Link>
                        </li>}
                        {userRole == "coordinator" && <li className="nav-item">
                            <Link to="/exam" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <PiExamLight style={{height: '2rem', width: '2rem'}}/>
                                <span>Exam Question Form</span>
                            </Link>
                        </li>}
                        {userRole == "student" && <li className="nav-item">
                            <Link to="/quize" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <PiExamLight style={{height: '2rem', width: '2rem'}}/>
                                <span>COC Exam</span>
                            </Link>
                        </li>}
                        {userRole == "student" && <li className="nav-item">
                            <Link to="/complain" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <TbWriting style={{height: '2rem', width: '2rem'}}/>
                                <span>Complain</span>
                            </Link>
                        </li>}
                        {userRole == "student" && <li className="nav-item">
                            <Link to="/placement" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <FcDepartment style={{height: '2rem', width: '2rem'}}/>
                                <span>Placement</span>
                            </Link>
                        </li>}
                        
                        {userRole == "student" && <li className="nav-item">
                            <Link to="/department-choice" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <FcDepartment style={{height: '2rem', width: '2rem'}}/>
                                <span>Department Choice</span>
                            </Link>
                        </li>}
                        {userRole == "registral" && <li className="nav-item">
                            <Link to="/reset-password" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <MdLockReset style={{height: '2rem', width: '2rem'}}/>
                                <span>Reset Password</span>
                            </Link>
                        </li>}
                        {userRole == "admin" && <li className="nav-item">
                            <Link to="/reset-password" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <MdLockReset style={{height: '2rem', width: '2rem'}}/>
                                <span>Reset Password</span>
                            </Link>
                        </li>}
                        {userRole == "registral" && <li className="nav-item">
                            <Link to="/add-user" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                {/* <i className="fas fa-fw fa-folder"></i> */}
                                <GoPersonAdd style={{height: '2rem', width: '2rem'}}/>
                                <span>Add New User</span>
                            </Link>
                        </li>}
                        {userRole == "coordinator" && <li className="nav-item">
                            <Link to="/assign-department" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Assign Department</span>
                            </Link>
                        </li>}
                        {userRole == "coordinator" && <li className="nav-item">
                            <Link to="/notification" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Notification</span>
                            </Link>
                        </li>}

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column side" >

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/*  <!-- Nav Item - Alerts --> */}


                                    {/*  <!-- Nav Item - Messages --> */}
                                    {userRole == "registral" &&     <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-envelope fa-fw"></i>
                                            {/*  <!-- Counter - Messages --> */}
                                            <span className="badge badge-danger badge-counter">7</span>
                                        </a>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="messagesDropdown">
                                            <h6 className="dropdown-header">
                                                Complains
                                            </h6>
                                            {complains.map(complain =>(
                                            <div className="dropdown-item d-flex align-items-center" onClick={handleShow}>
                                            
                                            
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                        alt="..." />
                                                    {/* <div className="status-indicator bg-success"></div> */}
                                                </div>
                                                
                                                    <div className="font-weight-bold" >
                                                        <div className="text-truncate">{complain.complain}</div>
                                                        <div className="small text-gray-500">{complain.student_first_name} {complain.student_middle_name}· {complain.created_at}</div>
                                                        <ComplainModal show={show} 
                                                                        handleShow={handleShow}
                                                                        handleClose={handleClose}
                                                                        studentId={complain.student_id}
                                                                        firstName={complain.student_first_name}
                                                                        middleName={complain.student_middle_name}
                                                                        lastName={complain.student_last_name}
                                                                        complain={complain.complain} />
                                                    </div>
                                            </div>))}


                                        

                                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                        </div>
                                    </li>}

                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user[0].firstName} {user[0].middleName}</span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>
                                        {/*  <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <div className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            {/* <Routes>
                                <Route path='/dashboard' element={<RegistralDashboardComponent />} />
                                <Route path='/view-student' element={<ViewStudentTable />} />
                                <Route path='/add-student' element={<AddNewStudent />} />
                                <Route path='/student/quize' element={<Quiz />} />
                                <Route path='/quize2' element={<Quizzz />} />
                                <Route path='/exam' element={<ExamForm />} />
                                <Route path='/department' element={<ViewDepartmentTable />} />
                                <Route path='/update-student' element={<UpdateStudent />} />
                                <Route path='/add-user' element={<AddNewUser />} />
                                <Route path='/department-choice/department-choice' element={<BasicSelect />} />
                                <Route path='/student/complain' element={<Complain />} />
                                <Route path='/complain-detail' element={<ComplainDetail />} />
                                <Route path='/student/placement' element={<StudentPlacement />} />
                            </Routes> */}
                            {children}
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Are You Sure You want to logout?</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-primary"  onClick={handleLogout} data-dismiss="modal">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default Dashboard;
