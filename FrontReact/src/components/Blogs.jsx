import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

//Blogs
const Blogs = () => {
  return (
    <section id="Blogs" className="py-5 bg-light">
      <Container className="text-center">
        <h2 className="fw-bold mb-4">BLOGS</h2>
        <p className="lead mb-4">
          Descubre historias inspiradoras, consejos útiles y noticias sobre la lucha contra el desperdicio de alimentos.
        </p>

        <Row className="justify-content-center mt-4 g-4">
          <Col xs={12} md={6} lg={5}>
            <Link to="/blog1" className="blog-card-link">
              <BlogCard
                title="Un gesto pequeño. Un impacto enorme"
                image="https://live.staticflickr.com/65535/52212731256_97e6c39fc4_w.jpg"
              />
            </Link>
          </Col>

          <Col xs={12} md={6} lg={5}>
            <Link to="/blog2" className="blog-card-link">
              <BlogCard
                title="Tu donación, su futuro"
                image="https://live.staticflickr.com/65535/52212732196_f89f6b5168_w.jpg"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;