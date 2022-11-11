import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Authentication/FirebaseInit';

const RequiredRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation()

    if(loading){
        return <div style={{textAlign:'center'}}><div class="spinner-border text-warning" role="status"></div></div>
    }

    if(user?.email){
        return children
    }

    return <Navigate to='/login' state={{from:location}}replace />
    
};

export default RequiredRoute;