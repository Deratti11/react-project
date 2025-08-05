import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Provide your name here
const firstName = "Alex"; // Change to "" to test fallback

const App = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <Image />
              <Card.Title className="mt-3"><Name /></Card.Title>
              <Card.Subtitle className="mb-2"><Price /></Card.Subtitle>
              <Card.Text><Description /></Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center mt-4">
            <h4>Hello, {firstName ? firstName : 'there'}!</h4>
            {firstName && (
              <img
                src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                alt="Hello"
                style={{ width: '150px', marginTop: '10px' }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
