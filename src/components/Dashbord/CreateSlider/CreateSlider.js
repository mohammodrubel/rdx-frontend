import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
// import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';


const CreateSlider = () => {
    const { register, handleSubmit } = useForm();
    const APIKEY = '32cbe549c15e21141842241b09bb27e2'
    const onSubmit = data => {

        const image = data.sliderimg[0]
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
                    const img = result.data.url
                    const information = {
                        shortText:data.shortText,
                        headline:data.headline,
                        sliderimg:img
                    }
                    fetch('https://rdxuniversity.onrender.com/slider',{
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
    };
    return (
        <>
             {/* <DashbordNavbar></DashbordNavbar> */}
             <Container>
                <Row>
                    <Col md={8} className='mx-auto'>
                        <h1 className='text-center mt-3'>Create Slider</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='border border-1 p-5'>

                            <input 
                            className='form-control p-3 mt-3' 
                            placeholder='Short Description' 
                            {...register("shortText", { required: true})}
                            style={{boxShadow:'none',color:'gray'}}
                             />

                            <input 
                            className='form-control p-3 mt-3' 
                            placeholder='Short Description' 
                            {...register("headline", { required: true})}
                            style={{boxShadow:'none',color:'gray'}}
                             />

                            <input 
                            className='form-control p-2 mt-3' 
                            type='file' 
                            {...register("sliderimg")}
                            style={{boxShadow:'none',color:'gray'}}
                             />

                            <div className='text-center'>
                                <button type='submit' className='customButton'>Create Slider</button>
                            </div>

                        </form>
                    </Col>
                </Row>
             </Container>
            
        </>
    );
};

export default CreateSlider;