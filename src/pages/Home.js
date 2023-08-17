// Import React and other necessary modules
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image from '../assets/indexPic.jpg';
import whoAreWe from '../assets/whoAreWe.jpg';
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';
import Hilda2 from '../assets/Hilda2.jpg';
import Sean from '../assets/Sean.jpg';
import Motebang from '../assets/Motebang.jpg';
import Phetolo from '../assets/Phetolo.jpg';
import Yolisa from '../assets/Yolisa.jpg';
import Sfiso from '../assets/Sfiso.jpg';
import '../styles/Home.css'; // Import the CSS file for styling

const TeamMember = ({ name, position, bio }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={bio.image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Position: {position}</Card.Text>
          <Button variant='success' onClick={() => setShowBio(!showBio)}>
            {showBio ? 'Hide Bio' : 'Read My Bio'}
          </Button>
          {showBio && (
            <div className='mt-3'>
              <p>{bio.description}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = () => {
  // Other parts of the Home component...

  return (
    <div style={{ minHeight: '75vh' }}>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgb(28, 28, 28)',
          height: '500px',
          width: '100%',
        }}
      >
    <a href="/shop">   
    <Button
  variant='primary'
  style={{
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    width: '150px',
    height: '50px',
    marginTop: '350px',
    marginLeft: '84px',
    fontSize: '20px', // Adjust the font size here as needed
    transition: 'transform 0.3s ease', // Adding transition property for smooth movement
  }}
  onMouseEnter={(e) => (e.target.style.transform = 'translateY(-5px)')}
  onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
>
  Shop Now
</Button>

  </a>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${whoAreWe})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1 className='text-center'>Who we are</h1>
              <p className='text-center'>
                HMP Engineering Solutions is an engineering design company based
                in Johannesburg South Africa. The company was founded by Hilda
                Forsythe in 2020 and has massively contributed to engineering
                design countrywide ever since. Our work focuses mainly on
                sustainability and information technology. With design engineers
                from Mechanical, electrical, electronics and software
                background, we are able to offer our clients solutions that are
                relevant to this fast and ever changing global market.
              </p>
            </div>
          </Col>
        </Row>

        <Row>

          

          <Col md={6}>
            <div style={{ marginTop: 40 }}>
              <h1 className='text-center'>Our Mission</h1>
              <p className='text-center'>
                HMP Engineering Solutions is an engineering design company based
                in Johannesburg South Africa. The company was founded by Hilda
                Forsythe in 2020 and has massively contributed to engineering
                design countrywide ever since. Our work focuses mainly on
                sustainability and information technology. With design engineers
                from Mechanical, electrical, electronics and software
                background, we are able to offer our clients solutions that are
                relevant to this fast and ever changing global market.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 40 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${mission})` }}
              ></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 40 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${vision})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 40 }}>
              <h1 className='text-center'>Our vision</h1>
              <p className='text-center'>
                To be the best engineering design company in Africa, leading the
                sustainability and innovation space. A dynamic force in the
                global market.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='my-4'>
          <Col md={12} className='d-flex justify-content-center'>
            <h1 style={{ fontSize: '36px' }} className='text-center'>
              OUR TEAM
            </h1>
          </Col>
          {/* Render each team member using the TeamMember component */}
          <TeamMember
            name="Hilda Forsythe"
            position="Founding director & CEO."
            bio={{
              image: Hilda2,
              description:
                'Hilda Forsythe is the founding director and CEO of HMP Engineering Solutions. She has been instrumental in leading the company to new heights in the engineering design industry.',
            }}
          />
          <TeamMember
            name="SEAN FORSYTHE"
            position="HEAD OF INSTALLATION & MAINTENANCE."
            bio={{
              image: Sean,
              description:
                'Sean Forsythe is the head of installation and maintenance at HMP Engineering Solutions. He has a strong background in mechanical engineering and is committed to ensuring the successful implementation of projects.',
            }}
          />
          <TeamMember
            name="MOTEBANG MOSEME"
            position="ELECTRICAL AND ELECTRONICS ENGINEER."
            bio={{
              image: Motebang,
              description:
                'Motebang Moseme is an electrical and electronics engineer at HMP Engineering Solutions. He is passionate about sustainable energy solutions and has contributed significantly to the company\'s projects.',
            }}
          />
        </Row>

        <Row className='my-4'>
          <TeamMember
            name="PHETOLO MPE"
            position="SOFTWARE ENGINEER."
            bio={{
              image: Phetolo,
              description:
                'Phetolo Mpe is a software engineer at HMP Engineering Solutions. He specializes in developing innovative software solutions that drive the company\'s projects forward.',
            }}
          />
          <TeamMember
            name="YOLISA MBUQE"
            position="LEGAL COUNSEL"
            bio={{
              image: Yolisa,
              description:
                'Yolisa Mbuqe is the legal counsel at HMP Engineering Solutions. He ensures that all legal matters related to the company\'s operations are handled professionally and efficiently.',
            }}
          />
          <TeamMember
            name="SFISO LANGA"
            position="MARKETING MANAGER"
            bio={{
              image: Sfiso,
              description:
                'Sfiso Langa is the marketing manager at HMP Engineering Solutions. He is responsible for promoting the company\'s services and ensuring strong brand presence in the market.',
            }}
          />
        </Row>
      </Container>

      {/* ... */}
    </div>
  );
};

export default Home;
