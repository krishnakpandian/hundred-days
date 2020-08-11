import React from 'react';
import './Blog.scss';
import Card from '../Day-Card/dayCard.js';
import info from '../data.json';
const Blog = () => {
    return(
        <React.Fragment>
            <div class="blog-container">
                <div class= "title">Blog Renders </div>
                <div class="blogs">
                {info.data.map((day,i) => {
                    return <Card data={day} index= {i} />
                })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Blog;