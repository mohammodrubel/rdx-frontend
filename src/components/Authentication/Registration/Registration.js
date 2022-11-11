
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomNavbar from '../../Home/CustomNavbar/CustomNavbar';
import Footer from '../../Home/Footer/Footer';
import ExtraInformation from '../../hooks/ExtraInformation';
import auth from '../FirebaseInit';
import './Registration.scss';
const Registration = () => {
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [update,setUpdate]=useState('')
    const [information]=ExtraInformation(user || googleUser) 
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
   
    const onBlurHandeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update};
        newValue [field] = value;
        console.log(newValue)
        setUpdate(newValue)
    }
   
    const onSubmitHendeler = async e =>{
        e.preventDefault()
        if(update.fullname.length === 0){
            toast.error('Name is Required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return
        }
        
        if(update.password !== update.repassword){
            toast.error('Password did not matched!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return
        }
       await createUserWithEmailAndPassword(update.email,update.password)
       await updateProfile({displayName:update.fullname})
    }

    console.log(user)
    
    if(loading || googleLoading){
        return <div className='loading'><div class="spinner-grow text-primary" role="status"></div></div>
    }



    return (
        <>
            <CustomNavbar/>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <h2 style={{textAlign:'center',color:'#192F59'}}>Registration</h2>
                        <form className='p-5 border border-1' onSubmit={onSubmitHendeler}>
                            <input 
                            placeholder='Full Name' 
                            className='form-control p-2 mt-3' 
                            style={{boxShadow:'none',color:'#192F59'}} 
                            name='fullname'
                            onBlur={onBlurHandeler}
                            />

                            <input 
                            placeholder='Enter Your Email' 
                            className='form-control p-2 mt-3' 
                            style={{boxShadow:'none',color:'#192F59'}}
                            name='email'
                            onBlur={onBlurHandeler}
                             />

                            <input 
                            placeholder='Enter Your Passowrd'
                            type='password' 
                            className='form-control p-2 mt-3' 
                            style={{boxShadow:'none',color:'#192F59'}}
                            name='password'
                            onBlur={onBlurHandeler}
                             />

                            <input 
                            placeholder='Re-Password'
                            name='repassword'
                            type='password' 
                            className='form-control p-2 mt-3' 
                            style={{boxShadow:'none',color:'#192F59'}}
                            onBlur={onBlurHandeler}
                             />
                            <p style={{color:'red'}}>{error?.message || googleError?.message}</p>
                             <div><span style={{color:'gray'}}> If you Have Already an Account Please <Link to='/login'>Login</Link></span></div>
                            <div className='text-center'><button type='submit' className='customButton'>Registration</button></div>
                            <div className='text-center' onClick={()=>signInWithGoogle()}><button className='customButton'>Sing In With Google</button></div>
                        </form>
                    </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default Registration;