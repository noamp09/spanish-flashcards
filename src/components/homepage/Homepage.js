// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 bg-light text-center shadow-lg home-card">
          <Card.Body>
            <Card.Title as="h1">¡Bienvenido a Aprende Español!</Card.Title>
            <Card.Text className="lead">
              Este es tu destino para aprender y mejorar tu español. Con nuestras herramientas interactivas y recursos, te ayudaremos a dominar el idioma rápidamente.
            </Card.Text>
            <Card.Text>
              Empezar con nuestros flashcards es una excelente manera de mejorar tu vocabulario. Haz clic en el botón de abajo para comenzar.
            </Card.Text>
            <Link to="/flashcard">
              <Button variant="primary" size="lg">Ir a Flashcards</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default HomePage;
