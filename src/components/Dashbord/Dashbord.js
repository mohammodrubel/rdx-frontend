import { faCalendar, faChartLine, faGear, faHome, faNewspaper, faPersonChalkboard, faPlusCircle, faRightFromBracket, faSchool, faSliders, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateEvent from '../Dashbord/CreateEvent/CreateEvent';
import CreateNewAdmin from '../Dashbord/CreateNewAdmin/CreateNewAdmin';
import CreateNewsUpdate from '../Dashbord/CreateNewsUpdate/CreateNewsUpdate';
import CreateSlider from '../Dashbord/CreateSlider/CreateSlider';
import CreateTeacher from '../Dashbord/CreateTeacher/CreateTeacher';
import DeleteEvent from '../Dashbord/DeleteEvent/DeleteEvent';
import DeleteNews from '../Dashbord/DeleteNews/DeleteNews';
import Deleteslider from '../Dashbord/Deleteslider/Deleteslider';
import DeleteTeacher from '../Dashbord/DeleteTeacher/DeleteTeacher';
import Demo from '../Dashbord/Demo/Demo';
import StudentInfo from '../Dashbord/StudentInfo/StudentInfo';
import logo from '../img/logo.png';
import './Dashbrod.scss';


const Dashbord = () => {
    const [dashbordCount,setDashbordCount]=useState(1)
    const [dashbordActiveSidebar,setDashbordActiveSidebar] = useState(true)
    


    return (
        <>
        {/* Dashbord Nav bar  */}
            <div className='customContainer' style={{boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
                <div style={{display:'flex',justifyContent:'space-between',margin:'0 30px',alignItems:'center',padding:'8px'}}>
                    <img src={logo} style={{width:'70px'}} />

                    <div style={{display:'flex',flexDirection:'column'}} onClick={()=>setDashbordActiveSidebar(!dashbordActiveSidebar)}>
                        <FontAwesomeIcon style={{fontSize:'25px',color:'tomato'}} icon={faGear}/>
                        <b>Admin</b>
                    </div>
                </div>
            </div>
                
            <div style={{display:'flex'}}>

                <div className= {dashbordActiveSidebar ? 'sidebar dashbordsidebaractive':'sidebar'}>
                    <ul className='DashbordMEnu'>
                                    <li  className={dashbordCount  ===1 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(1)}>
                                        <FontAwesomeIcon className='icon' icon={faChartLine}/><span>Dashbord</span> 
                                    </li> 

                                    <li className={dashbordCount  ===2 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(2)}>
                                        <Link style={{textDecoration:'none',color:'red'}} to='/'><FontAwesomeIcon className='icon' icon={faHome}/> <span>Home</span></Link>
                                    </li>


                                    <li className={dashbordCount  ===3 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(3)}>
                                        <FontAwesomeIcon className='icon' icon={faSliders}/> <span>Create Slider</span>
                                    </li>


                                    <li className={dashbordCount  ===4 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(4)}>
                                        <FontAwesomeIcon className='icon' icon={faCalendar}/><span>Create Event</span> 
                                    </li>


                                    <li className={dashbordCount  ===5 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(5)}>
                                        <FontAwesomeIcon className='icon' icon={faNewspaper}/> <span>Create News</span>
                                    </li>


                                    <li className={dashbordCount  ===6 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(6)}>
                                        <FontAwesomeIcon className='icon' icon={faPersonChalkboard}/><span>Create Teacher</span>
                                    </li>

                                    <li className={dashbordCount  ===7 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(7)}>
                                        <FontAwesomeIcon className='icon' icon={faPlusCircle}/> <span>Create Admin</span>
                                    </li>

                                    <li className={dashbordCount  ===8 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(8)}>
                                        <FontAwesomeIcon className='icon' icon={faTrash}/>  <span>Delete Slider</span>
                                    </li>

                                    <li className={dashbordCount  ===9 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(9)}>
                                        <FontAwesomeIcon className='icon' icon={faTrash}/> <span>Delete Event</span>
                                    </li>

                                    <li className={dashbordCount  ===10 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(10)}>
                                        <FontAwesomeIcon className='icon' icon={faTrash}/> <span>Delete News</span>
                                    </li>

                                    <li className={dashbordCount  ===11 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(11)}>
                                        <FontAwesomeIcon className='icon' icon={faTrash}/> <span>Delete Teacher</span>
                                    </li>

                                    <li className={dashbordCount  ===12 ? 'dashbordactivePlace' : null} onClick={()=> setDashbordCount(12)}>
                                        <FontAwesomeIcon className='icon' icon={faSchool}/> <span>Student Info</span>
                                    </li>
                                    <li style={{background:'tomato'}}>
                                        <FontAwesomeIcon className='icon' icon={faRightFromBracket}/> <span>Logout</span>
                                    </li>
                                </ul>
                </div>
                <div className='place'>
                    <div>
                            {dashbordCount === 3 && <CreateSlider></CreateSlider>}
                            {dashbordCount === 4 && <CreateEvent></CreateEvent>}
                            {dashbordCount === 5 && <CreateNewsUpdate></CreateNewsUpdate>}
                            {dashbordCount === 6 && <CreateTeacher></CreateTeacher>}
                            {dashbordCount === 7 && <CreateNewAdmin></CreateNewAdmin>}
                            {dashbordCount === 8 && <Deleteslider></Deleteslider>}
                            {dashbordCount === 9 && <DeleteEvent></DeleteEvent>}
                            {dashbordCount === 10 && <DeleteNews></DeleteNews>}
                            {dashbordCount === 11 && <DeleteTeacher></DeleteTeacher>}
                            {dashbordCount === 12 && <StudentInfo></StudentInfo>}
                            {dashbordCount === 1 && <Demo></Demo>}
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Dashbord;