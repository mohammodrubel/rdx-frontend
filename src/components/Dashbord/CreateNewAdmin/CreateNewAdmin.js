import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';

const CreateNewAdmin = () => {
    const [email,setAdminText]=useState('')

    const onBlurHandeler = e =>{
        setAdminText(e.target.value)
    }

    const formHandeler = e =>{
        e.preventDefault()
        if(email){
            fetch(`https://rdxuniversity.onrender.com/user/admin/${email} `,{
            method:'put'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        }
    }
    return (
        <>
            {/* <DashbordNavbar></DashbordNavbar>    */}
            <h1 className='text-center'>Create New Admin</h1>
            <Container>
                <Row>
                    <Col md={8} className='mx-auto'>
                        <form className='mt-4 border border-1 p-5' onSubmit={formHandeler}  >
                            <input className='form-control p-3'onChange={onBlurHandeler} placeholder='Create Admin' style={{boxShadow:'none'}}/>
                            <div className='mt-4 text-center'><button type='submit' className='customButton'>Create Admin</button></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CreateNewAdmin;