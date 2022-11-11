import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
// import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';

const Deleteslider = () => {
    const [slider,setSlider]=useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/slider')
        .then(res => res.json())
        .then(data => setSlider(data.result))
    },[])

    const DeleteUser = (id)=>{
        const url = `https://rdxuniversity.onrender.com/slider/${id}`
        const conrirm = window.confirm('Are you sure ? you want to delete from Database')
        if(conrirm){
            fetch(url,{
                method:'delete'
            })
            .then(res => res.json())
            .then(data => {
                const information = slider.filter((p) => p._id !== id)
                setSlider(information)
                toast.success('Data Delete Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
        }
    }

    return (
        <>
            {/* <DashbordNavbar></DashbordNavbar> */}
            <Container>
                <Row>
                    <Col md={8}className='mx-auto'>
                        <h1 className='text-center'>Delete Slider</h1>
                        <Table responsive className='mt-5' striped bordered hover style={{background:'white',padding:'30px'}}>
                            <thead>
                                <tr>
                                    <th className='text-center'>Image</th>
                                    <th className='text-center'>Headline</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    slider.map(singleSlider => <tr>
                                        <td className='text-center'><img src={singleSlider.sliderimg} style={{width:'100px'}} /></td>
                                        <td className='text-center'>{singleSlider.headline}</td>
                                        <td onClick={()=>DeleteUser(singleSlider._id)} style={{color:'red'}} className='text-center'>Delete</td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </Container>
        </>
    );
};

export default Deleteslider;