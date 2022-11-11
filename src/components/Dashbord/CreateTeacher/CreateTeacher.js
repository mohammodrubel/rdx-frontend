import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
// import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';

const CreateTeacher = () => {
    const { register, handleSubmit } = useForm();
    const APIKEY = '32cbe549c15e21141842241b09bb27e2'
    const onSubmit = data =>{
        const image = data.teacherimg[0]
        const formData = new FormData()
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${APIKEY}`
            fetch(url,{
                method:'post',
                body:formData
            })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const imgUrl = result.data.url
                    const information = {
                        name:data.name,
                        teacherimg:imgUrl
                    }
                fetch('https://rdxuniversity.onrender.com/teacher',{
                    method:'post',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(information)
                })
                .then(res => res.json())
                .then(inserted => {
                    toast.success('Slider Created Successfully', {
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
            })
    }
    return (
        <>
            {/* <DashbordNavbar></DashbordNavbar>    */}
            <Container>
                <Row>
                    <Col md={8} className='mx-auto'>
                    <h1 className='text-center mt-3'>Create Teacher</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='border border-1 p-5 mb-5' style={{height:'70vh'}}>

                        <input 
                        className='form-control p-3 mt-5' 
                        placeholder='Short Description' 
                        {...register("name", { required: true})}
                        style={{boxShadow:'none',color:'gray'}}
                        />

                        <input 
                        className='form-control p-2 mt-5' 
                        type='file' 
                        {...register("teacherimg")}
                        style={{boxShadow:'none',color:'gray'}}
                        />

                        <div className='text-center'>
                            <button type='submit' className='customButton mt-4'>Create Slider</button>
                        </div>

                        </form>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default CreateTeacher;