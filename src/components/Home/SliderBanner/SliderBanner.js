import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './SliderBanner.scss';

const SliderBanner = () => {
    const [databaseData,setdatabaseData]=useState([])
    useEffect(()=>{
      fetch('https://rdxuniversity.onrender.com/slider')
      .then(res => res.json())
      .then(data => setdatabaseData(data.result))
    },[])
    let settings = {
        dots: true,
        arrows:false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
      
   
    return (
        <div className='customContainer'>
            <div className='extracolor'>
            <Slider {...settings}>
            {
                databaseData.map(single => <div key={single.sliderimg} style={{position:"relative"}}>
                    <img src={single.sliderimg} style={{width:'100%'}} />
                    <div className='sliderContent'>
                        <div className='mb-2'>
                            <p style={{fontSize:'26px',color:'white'}}>{single.shortText}</p>
                        </div>
                        <div className='mb-2'><h1 className='bannerHeadline'>{single.headline}</h1> </div> 
                        <Link className=' ms-3 customButtonLink w-25 d-block' to='/registration'>Singup</Link>
                    </div>
                </div>)
            }
            </Slider>
            </div>
        </div>
    );
};

export default SliderBanner;


