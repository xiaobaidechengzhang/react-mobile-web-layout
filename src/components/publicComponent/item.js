//Ganhuo item样式
import React, { useState, useEffect } from 'react';
import './item.css';
import { withRouter } from 'react-router';


function Item(props) {
    function pushToArticle(e, id) {
        props.history.push(`/article/${id}`);
    }
    const list = [1].map((item, key) => {
        return <div className='item_cell' key={key} onClick={e => {pushToArticle(e, props.data._id)}}>
        <div className='left_img'>
            <img src={props.data.images[0]} alt='#'/>
           
        </div>
        <div className='right_text'>
            <div className='right_text_top'>
                <p>{props.data.title}</p>
            </div>
            <div className='right_text_mid'>
                <p>{props.data.desc}</p>
            </div>
            <div className='right_text_bot'>
                <div className='right_text_bot_content'>
                    <div className='right_text_bot_left'>
                        <img src='https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377' width='10px' heigh='10px' alt='#'/>
                        <p>{props.data.author}</p>
                        <p> - </p>
                        <p>{props.data.type}</p>
                    </div>
                    <div className='right_text_bot_right'>
                        <p>
                            {props.data.publishedAt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    })
    return  <div>
        {list}
    </div>
    
}
export default withRouter(Item);