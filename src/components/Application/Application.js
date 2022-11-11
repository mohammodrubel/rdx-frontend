import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import CustomNavbar from '../Home/CustomNavbar/CustomNavbar';
import Footer from '../Home/Footer/Footer';
import './Application.scss';

const Application = () => {
    const { register, handleSubmit } = useForm();
    const APIKEY = '32cbe549c15e21141842241b09bb27e2'
    const onSubmit = data => {
        const image = data.studentPhoto[0]
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
                    const information ={
                        fullName:data.fullName,
                        degreeLevel:data.degreeLevel,
                        studentPhoto:imgUrl,
                        nationalId:data.nationalId,
                        fathersName:data.fathersName,
                        mothersName:data.mothersName,
                        contactNumber:data.contactNumber,
                        email:data.email,
                        PresentAddress:data.PresentAddress,
                        birthdate:data.birthdate,
                        SchoolName:data.SchoolName,
                        schoolYear:data.schoolYear,
                        qualification:data.qualification,
                        areaStudey:data.areaStudey
                    }
                    fetch('https://rdxuniversity.onrender.com/admisstion',{
                        method:'post',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(information)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        toast.success('Apply Successfull', {
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
    };
    return (
        <>
            <CustomNavbar></CustomNavbar>
                
                <Container className='mt-5'>
                    <h3 style={{color:'#192F59',marginTop:'20px',marginBottom:'20px'}}>Student basic information</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Enter Your Name</span>
                           <input 
                           placeholder='Full Name' 
                           {...register("fullName", { required: true})} 
                           name='fullName' 
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Degree Level</span>
                            <select 
                            className='form-control p-2' 
                            {...register("degreeLevel", { required: true})} 
                            name='degreeLevel' 
                            style={{boxShadow:'none'}}
                            >
                                <option defaultValue="Fast Class">Fast Class</option>
                                <option defaultValue="Second Class">Second Class</option>
                                <option defaultValue="Third Class">Third Class</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Your Photo</span>
                           <input 
                           type='file'
                           name='studentPhoto' 
                           {...register("studentPhoto", { required: true})} 
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>National Id</span>
                            <input  
                            className='form-control p-2' 
                            {...register("nationalId", { required: true})} 
                            type='number' 
                            name='nationalId' 
                            style={{boxShadow:'none'}}
                            />
                        </Col>
                    </Row>

                    <h3 style={{color:'#192F59',marginTop:'20px',marginBottom:'20px'}}>Student personal information</h3>


                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Fathers's Name</span>
                           <input 
                           type='text'
                           placeholder='Fathers Name' 
                           name='fathersName' 
                           {...register("fathersName", { required: true})} 
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Mother's Name</span>
                            <input  
                            className='form-control p-2'
                            placeholder='Mothers Name' 
                            {...register("mothersName", { required: true})} 
                            name='mothersName' 
                            style={{boxShadow:'none'}}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Contact Number</span>
                           <input 
                           type='number'
                           name='contactNumber' 
                           placeholder ='Contact Number'
                           {...register("contactNumber", { required: true})}  
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Email</span>
                            <input 
                            placeholder='Email' 
                            {...register("email", { required: true})} 
                            className='form-control p-2'
                            name='email' 
                            style={{boxShadow:'none'}}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Present address</span>
                           <input 
                           type='text'
                           name='PresentAddress' 
                           placeholder='Present address' 
                           {...register("PresentAddress", { required: true})}  
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Birth Date</span>
                            <input 
                            type='date' 
                            className='form-control p-2' 
                            {...register("birthdate", { required: true})} 
                            name='birthdate' 
                            style={{boxShadow:'none'}}
                            />
                        </Col>
                    </Row>
                    <h3 style={{color:'#192F59',marginTop:'20px',marginBottom:'20px'}}>Student academic information</h3>
                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>School Name</span>
                           <input 
                           name='schoolName'
                           placeholder='School Name' 
                           {...register("SchoolName", { required: true})}   
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Year</span>
                            <input 
                            type='date' 
                            className='form-control p-2' 
                            {...register("schoolYear", { required: true})} 
                             name='schoolYear' 
                             style={{boxShadow:'none'}}
                             />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Highest qualification</span>
                           <input 
                           name='qualification'
                           placeholder='Highest qualification' 
                           {...register("qualification", { required: true})}  
                           className='form-control p-2' 
                           style={{boxShadow:'none'}}
                           />
                        </Col>
                        <Col sm={6} className='mt-4'>
                            <span style={{color:'gray'}}>Select area of study</span>
                            <input 
                            type='text'
                            placeholder='Select area of study' 
                            className='form-control p-2'
                            name='areaStudey' 
                            {...register("areaStudey", { required: true})}  
                            style={{boxShadow:'none'}}/>
                        </Col>
                    </Row>

                    <div className='text-center mt-4'><button type='submit' className='customButton'>Application Submit</button></div>
                    
                    </form>
                </Container>

            <Footer></Footer>
        </>
    );
};

export default Application;