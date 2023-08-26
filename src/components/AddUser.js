import { useState } from "react";
import { Link } from "react-router-dom"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserRequest } from '../redux/actions/userAction';


const AddNewUser = ()=>{
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

      const dispatch = useDispatch();
      const users = useSelector(state => state.user.users);
      const loading = useSelector(state => state.user.loading);
      const error = useSelector(state => state.user.error);
    
      const data = {
        user_id:id,
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        email:email,
        password:password,
        role:role,

    }

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUserRequest(data));
        console.log(data);
      };


    // const addStudent =()=>{
       

    //     console.log(data);
    //     http.post('/addStudent', data).then(res=>{
    //         console.log(res);
    //         if(res.data.status == 422){
    //             console.log("Error happen");
    //         }
    //     });
    // }

    return(
        <>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User
                                    <Link to="/view-student" className="btn btn-danger float-end">
                                        Back
                                    </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label>Id</label>
                                            <input type="text" name="id" className="form-control"
                                            onChange={(e) => setId(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>First Name</label>
                                            <input type="text"
                                             name="fname" 
                                             className="form-control"
                                             onChange={(e) => setFirstName(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Middle Name</label>
                                            <input type="text" name="mname" className="form-control"
                                            
                                            onChange={(e) => setMiddleName(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" className="form-control"
                                           
                                            onChange={(e) => setLastName(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control"
                                           
                                            onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
            
                                        <div className="mb-3">
                                            <label>Role</label>
                                            <input type="text" name="role" className="form-control"
                                            
                                            onChange={(e) => setRole(e.target.value)}/>
                                        </div>
                                        <div>
                                            <button type="submit"  className="btn btn-primary">Save User</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewUser;
