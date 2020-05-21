import React, { useState, useEffect, useCallback } from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom';
import './girl.css';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import Slider from './childs/drawerChild/slider.js';
import ImgHead from './childs/imgHead.js';
import ArticleDetail from './childs/articleDetail.js';
import Home from './childs/home.js';
import 'antd-mobile/dist/antd-mobile.css';


function Girl(props) {
    
    //抽屉是否打开
    const [open, setOpen] = useState(false);
    const [strr, setStrr] = useState('');
    
    //抽屉侧边栏数据mock
    const [sliderData, setSliderData] = useState([
        {title: '首页', type: 'All',types: []},
        {title: '妹纸', type: 'Girl',types:[
            {title: '妹纸',category: 'Girl',type:'Girl'}
        ]},
        {title: '干货',type: 'GanHuo', types: [
            {title: 'Android',category: 'GanHuo', type: 'Android'},
            {title: 'iOS',category: 'GanHuo', type: 'iOS'},
            {title: 'Flutter',category: 'GanHuo', type: 'Flutter'}
        ]}
    ])
    function openOrClose() {
        setOpen(!open);
    }
    //抽屉侧边栏样式
    const sidebar = (<Slider data={sliderData} openOrClose={openOrClose}/>);
    
    function onOpenChange(...args) {
        let pattern = /\r\n/g
        let str = 'test\r\ntest\r\n'
        console.log(str);
        let str2 = str.replace(pattern, '<br/>');
        setStrr(strr.concat(str2));
        console.log(str2);
        console.log('open');
        
        setOpen(!open)
    }
    
    return  <div id="resent-search-view3"> 
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                    sidebar={sidebar}
                    open={open}
                    onOpenChange={onOpenChange}
                >
                    <NavBar icon={<Icon type="ellipsis" />} onLeftClick={onOpenChange}>Basic</NavBar>
                    <Route path='/' exact render={() => {
                        return <Home/>
                    }}/>
                    <Route path='/home'  render={() => {
                        return <Home/>
                    }}/>
                    <Route path='/article/:id' render={() => {
                        return <ArticleDetail/>
                    }}/>
                    <Route path='/category/:category/type/:type' render={() => {
                        return <ImgHead/>
                    }}/>
                  
                </Drawer>  
               
            </div>
}

export default Girl;