import { Carousel, WingBlank } from 'antd-mobile';
import React, { useState, useEffect, useCallback } from 'react';
import BannerItem from './bannerItem.js';
import './banner.css';

function Banner(props) {
    const [imgData, setImgData] = useState({
        data: ['1', '2', '3'],
        imgHeight: 176,
    })
    const [data, setData] = useState([]);
   
  
    useEffect(() => {
      setData(props.data)
    })
    return (<WingBlank>
    <Carousel
      autoplay={true}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {data.map((val, key) => {
        console.log('bannner')
         return <BannerItem key={key} data={val}/>
      }
        
      )}
    </Carousel>
  </WingBlank>)
}

export default Banner;