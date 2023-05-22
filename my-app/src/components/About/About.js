import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
    <Card data-testid="about" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Hi, I'm a React developer. I love coding, coffee, and playing video
          games.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
