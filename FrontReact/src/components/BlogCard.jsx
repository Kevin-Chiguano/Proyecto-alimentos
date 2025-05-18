import React from 'react';
import './BlogCard.css';//Cuadro Blog

const BlogCard = ({ title, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
