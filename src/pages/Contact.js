import React from 'react';
import image from '../assets/photo-1595437193398-f24279553f4f.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Header
        image="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
        title="Get in Touch"
        subTitle="Need to get in touch? We'd love to hear from you."
      />
      <Container>
        <Row className="align-items-center">
          <div className="contact-heading">
            <h1>Contact Us</h1>
          </div>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <div
                className="contact-image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-info">
              <h1>HMP ENGINEERING SOLUTIONS</h1>
              <p>Call: 010 012 6592/ 073 505 1204</p>
              <h4>Physical address</h4>
              <p>14 Goldman Street, Florida, Roodepoort, South Africa</p>
              <h4>General queries</h4>
              <p>info@hmpengineeringsolutions.co.za</p>
              <h1>QUESTIONS & ESTIMATES</h1>
              <p>
                We would love to hear from you! Please reach out at your
                convenience so we can discuss your project.
              </p>
              <a
                className="contact-btn"
                href="https://wa.me/27735051204"
                role="button"
              >
                WhatsApp
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
