import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import AdminInfo from '../../Authentication/AdminInfo/AdminInfo';
import auth from '../../Authentication/FirebaseInit';
import logo from '../../img/logo.png';
import './CustomNavbar.scss';

const CustomNavbar = () => {
    const [activeMenu,setActiveMenu]=useState(false)
    const [user, loading, error] = useAuthState(auth);
    const [admin] = AdminInfo()
    
    const logout = () => {
        signOut(auth);
      };
    return (
        <>
            <Container fluid className='customnav'>
            <Row>
                <div className='Desktop'>
                    <img src={logo} />

                    <ul>
                        <li><Link className='navlinks' to='/'>Home</Link></li>
                        <li><Link className='navlinks' to='/event'>Event</Link></li>
                        <li><Link className='navlinks' to='/news'>News</Link></li>
                        <li><Link className='navlinks' to='/application'>Admisstion</Link></li>
                        {user?.email ? <li onClick={logout}><Link className='navlinks' style={{color:'red'}}>Logout</Link></li> :<li><Link className='navlinks' to='/login'>Login</Link></li>}
                        {admin && <li><Link className='navlinks' to='/dashbord'>Dashbord</Link></li>}
                    </ul>
                </div>
                <div className='MobileMenu'>
                    <div className='logomenu'>
                        <img src={logo}  style={{width:'80px'}}/>
                        <div  onClick={()=> setActiveMenu(!activeMenu)}><FontAwesomeIcon style={{fontSize:'25px'}} icon={faBars} /></div>
                    </div>
                    <ul className={activeMenu ? 'acctivelink' : null}>
                        <li><Link className= 'navlinks' to='/'>Home</Link></li>
                        <li><Link className= 'navlinks' to='/event'>Event</Link></li>
                        <li><Link className= 'navlinks' to='/news'>News</Link></li>
                        <li><Link className= 'navlinks' to='/application'>Admisstion</Link></li>
                        {user?.email ?<li onClick={logout}><Link className= 'navlinks' style={{color:'red'}}>Logout</Link></li>:<li><Link className= 'navlinks' to='/login'>Login</Link></li>}
                        {admin && <li><Link className= 'navlinks' to='/dashbord'>Dashbord</Link></li>}
                    </ul>
                </div>
            </Row>
        </Container>
        
        </>
    );
};

export default CustomNavbar;