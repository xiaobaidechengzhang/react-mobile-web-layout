//文章详情头部样式
import React, { useState, useEffect } from 'react';
import './articleDetail.css';
import axios from 'axios';
import { withRouter, useParams } from 'react-router';
import {
    urlParams
} from 'react-router-dom';
import marked from 'marked';
import hjs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlightjs/styles/dark.css';

function ArticleDetail(props) {
    
    const { id } = useParams();
    const [data, setData] = useState({});
    const [markedContent, setMarkedContent] = useState('')

    
    function setMarked(value) {
        console.log(data);
        marked.setOptions({
          renderer: new marked.Renderer(),
          highlight: function (code) {
            
            return hjs.highlightAuto(code).value
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        
        })
        return marked(value)
    }
   
    useEffect(() => {
        axios.get(`https://gank.io/api/v2/post/${id}`)
        .then(res => {
            console.log(res.data.data)
            setData(res.data.data);
            setMarkedContent(setMarked(res.data.data.markdown))
        })
        .catch(err => {
            console.error(err); 
        })
    }, [id])
    return  <div className='articleDetail'>
                <div className='articleDetailCap'>
                    <div className='articleDetailCapTop'><span>#{data.type}</span></div>
                    <div className='articleDetailCapMiddle'><p>{data.type === 'Girl' ? `妹纸图${data.title}`: '没有返回值 哈哈'}</p></div>
                    <ul className='articleDetailCapBottom'>
                        <li className='articleDetailCapBottomLeft'>
                            <img src='https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377' alt='#'/>
                            <p>&ensp;</p>
                            <p>{data.author}</p>
                            <p>&ensp;-&ensp;</p>
                            <p>{data.publishedAt}</p>
                        </li>
                        <li className='articleDetailCapBottomRight'>
                            <img src='https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377' alt='#'/>
                            <p>{data.stars}</p>
                            <p>&ensp;</p>
                            <img src='https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377' alt='#'/>
                            <p>{data.likeCounts}</p>
                            <p>&ensp;</p>
                            <img src='https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377' alt='#'/>
                            <p>0</p>
                        </li>
                    </ul>
                </div>
                <div className='articleDetailLine'></div>
                <div className='articleDetailDes'>描述</div>
                {data.type === 'Girl' ? <div className='content_img'><img src={data.images[0]}/></div> : <div className='content' dangerouslySetInnerHTML={{__html: markedContent}}></div>}
            </div>
}
export default withRouter(ArticleDetail);