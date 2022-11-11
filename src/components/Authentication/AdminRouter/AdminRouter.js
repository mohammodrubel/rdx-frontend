// import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../FirebaseInit';

const AdminRouter = ({children,...rest}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,setAdmin]=useState(true)
    let location = useLocation()

    useEffect(()=>{
        fetch(`https://rdxuniversity.onrender.com/user/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])

    if(loading){
        return <div style={{textAlign:'center'}}><div className="spinner-border text-warning" role="status"></div></div>
    };

    if(user?.email && admin){
        return children
    }

    return <Navigate to='/' state={{form:location}}/>
    
};

export default AdminRouter;