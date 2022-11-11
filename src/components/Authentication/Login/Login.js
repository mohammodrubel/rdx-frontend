import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomNavbar from '../../Home/CustomNavbar/CustomNavbar';
import Footer from '../../Home/Footer/Footer';
import auth from '../FirebaseInit';

const Login = () => {
    const [update,setUpdate]=useState('')
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const onBlurHandeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update};
        newValue [field] = value;
        setUpdate(newValue)
    }


    const onSubmitHendeler = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(update.email,update.password)
    }

    // Loading 
    if(loading){
        return <div className='loading'><div class="spinner-grow text-primary" role="status"></div></div>
    }

     
     
    
    return (
        <>
            <CustomNavbar/>   

            <Container>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <h2 style={{textAlign:'center',color:'#192F59'}}>Login</h2>
                        <form className='p-5 border border-1 mb-5' onSubmit={onSubmitHendeler}>
                            
                            <input 
                            placeholder='Enter Your Email' 
                            className='form-control p-3 mt-4' 
                            style={{boxShadow:'none',color:'#192F59'}}
                            name='email'
                            onBlur={onBlurHandeler}
                             />

                            <input 
                            placeholder='Enter Your Passowrd'
                            type='password' 
                            className='form-control p-3 mt-4' 
                            style={{boxShadow:'none',color:'#192F59'}}
                            name='password'
                            onBlur={onBlurHandeler}
                             />
                            <p style={{color:'red'}}>{error?.message }</p>
                            <div><span style={{color:'gray'}}>If You Have No Account Please  <Link to='/registration'>Singup</Link></span></div>
                            <div className='text-center mt-3'><button type='submit' className='customButton w-50 '>Login</button></div>
                            
                        </form>
                    </Col>
            </Row>
        </Container>

            <Footer></Footer>
        </>
    );
};

export default Login;