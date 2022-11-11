import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
    return (
        <div className='customContainer topbar'>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'12px'}}>
                        <div>
                            <ul style={{margin:'0',padding:'0',display:'flex',gap:'20px'}}>
                                <li style={{listStyle:'none'}}>
                                    <Link className='link' to=''>
                                        <FontAwesomeIcon icon={faEnvelope}/><span className='mx-1' style={{color:'gray'}}>fardintazbeed@gamil.com</span>
                                    </Link>
                                </li>

                                <li style={{listStyle:'none'}}>
                                    <Link className='link' to=''>
                                        <FontAwesomeIcon icon={faPhone}/> <span className='mx-1' style={{color:'gray'}}>+8801907626245</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6><Link className='link' to='/registration'style={{color:"white"}} >SingUp</Link></h6>
                            </div>
                    </div>
        </div>
    );
};

export default Topbar;