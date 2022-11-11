import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Authentication/FirebaseInit';

const AdminInfo = ()=>{
    const [admin,setAdmin]=useState(false)
    const [adminLoading,setAdminLoading]=useState(true)
    const [user, loading, error] = useAuthState(auth);


    useEffect(()=>{
        fetch(`https://rdxuniversity.onrender.com/user/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        })
    },[user?.email])

    return [admin,adminLoading]
    
}

export default AdminInfo