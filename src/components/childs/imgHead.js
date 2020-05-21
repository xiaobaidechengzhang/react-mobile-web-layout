//每个分类的头部图片
import React, { useState, useEffect } from 'react';
import './imgHead.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Item from '../publicComponent/item.js';
import ItemGirl from '../publicComponent/itemGirl.js';
import { withRouter } from 'react-router';

function ImgHead(props) {
    const { category, type } = useParams();
    const [headImageData, setHeadImageData] = useState({});
    const [itemData, setItemData] = useState([]);
    
    useEffect(() => {
        axios.all([
            axios.get(`https://gank.io/api/v2/categories/${category}`),
            axios.get(`https://gank.io/api/v2/data/category/${category}/type/${type}/page/1/count/20`)
        ])
        .then(axios.spread((res1, res2)=>{
            res1.data.data.map((i,key) => {
                if(i.type === type) {
                    setHeadImageData(i)
                }
            })
            console.log(res2.data.data);
            setItemData(res2.data.data)
        }))
        // axios.get(`https://gank.io/api/v2/categories/${category}`)
        // .then(res => {
        //     console.log(res.data.data);
        //     console.log(category);
        //     let data = res.data.data;
        //     data.map((i, key) => {
        //         if(i.type === type) {
        //             setHeadImageData(i)
        //         }
        //     })
            
        // })
        // .catch(err => {
        //     console.error(err); 
        // })
        // axios.get(`https://gank.io/api/v2/data/category/${category}/type/${type}/page/1/count/20`)
        // .then(res => {
        //     console.log(res.data.data)
        //     setItemData(res.data.data);
        // })
        // .catch(err => {
        //     console.error(err); 
        // })
    },[category, type])
    return  <div>
                <div className='imgHead'>
                    <img src={headImageData.coverImageUrl} alt='#'/>
                    <ul className='typeAndTimes'>
                        <li className='typeAndTimesLeft'>{type}</li>
                        <li className='typeAndTimesRight'>2305次观看</li>
                    </ul>
                    <div className='lineM'></div>
                    <div className='imgHeadDes'>{headImageData.desc}</div>
                </div>
                <div className='lineM'></div>
                
                    {itemData.map((item, index) => {
                        if(item.type === 'Girl') {
                            return <ItemGirl key={index} data={item}/>
                        }
                        else {
                            return <Item key={index} data={item}/>
                        }
                    })}
                
            </div>
}
export default withRouter(ImgHead);