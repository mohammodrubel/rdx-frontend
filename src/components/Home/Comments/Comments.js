import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import commentsIMg from '../../img/comments.png';
const Comments = ({user,newsinfo}) => {
    const [userComments,setUserComments]=useState('')
    const NewsId = newsinfo.newsinfo
    const [totalNews,setTotalNews]=useState([])
    const userEmail= user.email
    const displayName = user?.displayName
    const [loading,setLoading]=useState(true)
    
    const onBlurHandeler = e =>{
        setUserComments(e.target.value)
    }
    
    const information = {
        NewsId:NewsId,
        userEmail:userEmail,
        comments:userComments,
        displayName:displayName
    }

    const onSubmitHandeler = e =>{
        e.preventDefault()
            fetch('https://rdxuniversity.onrender.com/comments',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('submit Successfull', {
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
        e.taregt.reset()
        
    }

    const deleteComments = (id)=>{
        const confirm = window.confirm('are you sure? you want to delete this Comments? ')
        if(confirm){
            fetch(`https://rdxuniversity.onrender.com/comments/${id}`,{
                method:'delete'
            })
            .then(res => res.json())
            .then(data => {
                const information = totalNews.filter((p) => p._id !== id)
                setTotalNews(information)
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

    useEffect(()=>{
        fetch(`https://rdxuniversity.onrender.com/comments`)
        .then(res => res.json())
        .then(data => {
            setTotalNews(data.result.filter((p)=> p.NewsId === NewsId))
            setLoading(!loading)
            
        })
    },[loading])

    return (
        <Container >
            <Row>
                <Col>
                    {
                        totalNews.map(singleCommentsUser => <div key={singleCommentsUser._id}>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                                <img src={commentsIMg} style={{width:'70px'}} />
                                <h6>{singleCommentsUser?.displayName}</h6>
                                
                            </div>
                            <p>
                                {singleCommentsUser.comments}
                                {
                                  userEmail === singleCommentsUser.userEmail ? <h6 onClick={()=>deleteComments(singleCommentsUser._id)} style={{color:'red'}}>Delete Comments</h6> : null  
                                }
                            </p>
                        </div>)
                    }
                </Col>
            </Row>
            <Row>
                <Col md={7} className='mx-auto'>
                    <form onSubmit={onSubmitHandeler}>
                        <textarea  rows={8} onBlur={onBlurHandeler} className='form-control' style={{boxShadow:'none'}} />
                        <div className='text-center mt-5 mb-3'><button type='submit' className='customButton w-50'>Submit</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Comments;