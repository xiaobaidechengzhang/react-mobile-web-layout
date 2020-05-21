//Girl item类型
import React, { useState, useEffect } from 'react';
import './itemGirl.css';
import { withRouter } from 'react-router';

function itemGirl(props) {
    function pushToArticle(e, id) {
        props.history.push(`/article/${id}`);
    }
    return  <div className='body' onClick={e => {pushToArticle(e, props.data._id)}}>
                <div className='title'><span className='titleType'>#妹纸#</span><span>妹纸图{props.data.title}</span></div>
                <ul className='des'>
                    <li className='left'>
                        <ul>
                            <li>{props.data.author}</li>
                            <li>--</li>
                            <li>妹纸</li>
                        </ul>
                    </li>
                    <li className='right'>{props.data.publishedAt}</li>
                </ul>
                <img src={props.data.images[0]} alt='#'/>
            </div>
}
export default withRouter(itemGirl);