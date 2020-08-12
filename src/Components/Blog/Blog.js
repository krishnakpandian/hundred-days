import React from 'react';
import './Blog.scss';
import DayCard from '../DayCard/DayCard.js';
import info from '../data.json';
const Blog = () => {
    return(
        <React.Fragment>
            <div class="blog-container">
                <div class= "title">Blog Renders </div>
                <div class="blogs">
                {info.data.map((day,i) => {
                    return <DayCard data={day} index= {i} />
                })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Blog;