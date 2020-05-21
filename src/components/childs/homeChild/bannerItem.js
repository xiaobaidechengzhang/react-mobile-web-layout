import React, { useState, useEffect } from 'react';
import './bannerItem.css';

function bannerItem(props) {
    return  <div className='bannerItem'>
                <img src={props.data.image} alt='#'/>
                <div className='bannerItemTitle'><p>{props.data.title}</p></div>
            </div>
}

export default bannerItem;