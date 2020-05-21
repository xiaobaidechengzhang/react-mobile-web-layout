import React, { useState, useEffect } from 'react';
import './slider.css';
import { push } from 'connected-react-router';
import { Accordion, List } from 'antd-mobile';
import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router';

function slider(props) {
    const history = createBrowserHistory();
    
    function onChange(key) {
        console.log(key);
    }
    function pushToChild(e, item, index) {
        console.log(props);
        if(item.types.length === 0) {
            console.log('0000')
            props.history.push('/home')
        }
        else if(item.types.length === 1) {
            //props.history.push('/article/111')
            props.history.push(`/category/${item.types[0].category}/type/${item.types[0].type}`)
        }
        else {
           props.history.push(`/category/${item.types[index].category}/type/${item.types[index].type}`)
        }
        props.openOrClose();
    }
    const list = props.data.map((i, key) => {
        if(i.types.length < 2) {
            return <li key={key} className='bottom_item' onClick={e => {pushToChild(e, i, key)}}>{i.title}</li>
        }
        else {
            return <li key={key} className='bottom_item'>
             <Accordion className="my-accordion" onChange={onChange}>
          <Accordion.Panel header={i.title}>
            <List className="my-list">
              {i.types.map((item, index) => {
                  return <List.Item key={index} onClick={e => pushToChild(e,i, index)}>{item.title}</List.Item>
              })}
            </List>
          </Accordion.Panel>
        </Accordion>
        </li>
        }
    })
    return  <div>
                <div className='title'>
                    <img src='http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590214645&t=eb312cc8103e630488458d4b9966f7a0' alt=''/>
                    <div className='zIndex'>
                        
                        <div className='name'>
                            <img src='http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590212722&t=1ebd1191d55cf8e0d6b478d3fc550d06' alt=''/>
                            <button className='login'>登录</button>
                        </div>
                        <ul className='bottom'>
                            {list}
                        </ul>
                    </div>
                    
                </div>
            </div>    
            
}

export default withRouter(slider);