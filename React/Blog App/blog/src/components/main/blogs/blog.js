import React,{Component, Fragment} from 'react';
import { dummyBlogsData } from '../../../constants/dummyData';

import "./Blog.css";


 
class Blog extends Component {
    // constructor(props){
    //     super(props); 
    //     }
 
    render(){
        const{blogTitle,blogText,blogImage}=this.props.info;
        console.log(blogImage)
        return (
            // <Fragment>
            // <div class="main">
            <div className="card">

                <div class="blog__image">
                <img src={blogImage}></img>
                </div>

                <div class="blog__title">
                <h2>{blogTitle}</h2>
                </div>

                <div className="blog__description">
                    {blogText}
                    <button className="btn__readmore">Read More</button>
                </div>
                <div class="icons">
                <i class="far fa-comment"></i>
                </div>

            </div>
            // </div>
            // </Fragment>
        );
    }
 
}
 
export default Blog