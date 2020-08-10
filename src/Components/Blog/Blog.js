import React from 'react';
import './Blog.scss';
import Card from '../Day-Card/Card.js';
import info from '../data.json';
const Blog = () => {
    return(
        <React.Fragment>
            <div class="blog-container">
                <div class= "title">Blog Renders </div>
                <div class="blogs">
                {info.data.map((day) => {
                    return <Card data={day}/>
                })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Blog;