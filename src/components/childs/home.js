import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Item from '../publicComponent/item.js';
import ItemGirl from '../publicComponent/itemGirl.js';
import Banner from './homeChild/banner.js';
import './home.css';

function Home(props) {
    //首页banner url
    const [bannerURL, setBannerURL] = useState('https://gank.io/api/v2/banners');
    //首页tag标签active
    const [activeKey, setActiveKey] = useState(0);
    //首页tag标签mock数据
    const [tags, setTags] = useState([
        {tag: '首页', category :'All', type:'All'},
        {tag: '妹纸',category:'Girl',type:'Girl'},
        {tag: 'Android',category:'GanHuo',type:'Android'},
        {tag: 'ios',category:'GanHuo',type:'iOS'},
        {tag: 'Flutter',category:'GanHuo',type:'Flutter'},
        {tag: '前端',category:'GanHuo',type:'frontend'},
        {tag: 'App',category:'GanHuo',type:'app'}
    ]);
    //首页banner数据
    const [bannerData, setBannerData] = useState([]);
    //item数据
    const [itemData, setItemData] = useState([]);
    //是否加载
    const [isLoading, setIsLoading] = useState(false);
    //获取首页Banner数据
    const getBannerData = useCallback(() => {
        
        axios.get(bannerURL)
        .then(res => {
            setBannerData(res.data.data);
            console.log(res.data.data);
        })
        .catch(err => {
            console.error(err); 
        })
    },[bannerURL])
    //获取首页数据
    const getInitialData = useCallback(() => {
        setIsLoading(true);
        let initialURL = `https://gank.io/api/v2/data/category/${tags[activeKey].category}/type/${tags[activeKey].type}/page/1/count/20`;
        axios.get(initialURL)
        .then(res => {
            
            setItemData(res.data.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err); 
        })
    },[activeKey,tags])
     //首页标签变化
    function changeActiveKey(e, val) {
        if(val !== activeKey) {
            
            setActiveKey(val);
        }
    }
    useEffect(() => {
        getBannerData()
    },[getBannerData])
    useEffect(() =>{
        getInitialData()
    },[getInitialData])
    return (
        <div>
            <Banner data={bannerData}/>
            <ul id="resent-search3">
                {tags.map((i, key) => {
                    return <li key={key} className={`${activeKey === key ? 'active' : 'resent-search-tag3'}`} onClick={(e) => {changeActiveKey(e, key)}}><b>{i.tag}</b></li>
                })}
            </ul>
            {
                isLoading ? <div>Loading</div> : <div>
                {itemData.map((i) => {
                    if(i.type === 'Girl') {
                        return <ItemGirl key={i._id} data={i}/>
                    }
                    else {
                        return <Item key={i._id} data={i}/>
                    }
                })}
                </div>
            }
        </div>
    )   
}

export default Home;