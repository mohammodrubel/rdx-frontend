import { faCalendar, faChartLine, faHome, faNewspaper, faPersonChalkboard, faPlusCircle, faRightFromBracket, faSchool, faSliders, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashbordNavbar.scss';


const DashbordNavbar = () => {
    const [dashbordActiveSidebar,setDashbordActiveSidebar] = useState(false)

    console.log(dashbordActiveSidebar)

    return (
        <div className='customContainer' style={{boxShadow:'2px 2px 2px 1px rgb(0 0 0 / 20%)'}}>

            
            <div className={dashbordActiveSidebar ? 'dashbordSidebar activeDashbordSideMenu':'dashbordSidebar '}>
                <ul>
                    <li>
                        <Link className='noneActive'to='/dashbord'>
                            <FontAwesomeIcon className='icon' icon={faChartLine}/> Dashbord
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/'>
                            <FontAwesomeIcon className='icon' icon={faHome}/> Home
                        </Link>
                    </li>


                    <li>
                        <Link className='noneActive' to='/dashbord/createslider'>
                            <FontAwesomeIcon className='icon' icon={faSliders}/> Create Slider
                        </Link>
                    </li>


                    <li>
                        <Link className='noneActive' to='/dashbord/createevent'>
                            <FontAwesomeIcon className='icon' icon={faCalendar}/> Create Event
                        </Link>
                    </li>


                    <li>
                        <Link className='noneActive' to='/dashbord/createnewsupdate'>
                            <FontAwesomeIcon className='icon' icon={faNewspaper}/> Create News
                        </Link>
                    </li>


                    <li>
                        <Link className='noneActive' to='/dashbord/createteacher'> 
                            <FontAwesomeIcon className='icon' icon={faPersonChalkboard}/> Create Teacher
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/dashbord/createadmin'> 
                            <FontAwesomeIcon className='icon' icon={faPlusCircle}/> Create Admin
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/dashbord/deleteslider'> 
                            <FontAwesomeIcon className='icon' icon={faTrash}/> Delete Slider
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/dashbord/deleteevent'> 
                            <FontAwesomeIcon className='icon' icon={faTrash}/> Delete Event
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/dashbord/deletenews'> 
                            <FontAwesomeIcon className='icon' icon={faTrash}/> Delete News
                        </Link>
                    </li>

                    <li>
                        <Link className='noneActive' to='/dashbord/deleteteacher'> 
                            <FontAwesomeIcon className='icon' icon={faTrash}/> Delete Teacher
                        </Link>
                    </li>

                    <li>
                        <Link  className='noneActive' to='/dashbord/studentinfo'> 
                            <FontAwesomeIcon className='icon' icon={faSchool}/> Student Info
                        </Link>
                    </li>
                    <li style={{background:'tomato'}}>
                        <Link  className='noneActive' to='/dashbord/studentinfo'> 
                            <FontAwesomeIcon className='icon' icon={faRightFromBracket}/> Logout
                        </Link>
                    </li>
                    
                    
                    

                </ul>
            </div>
        </div>
    );
};

export default DashbordNavbar; 