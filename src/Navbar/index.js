
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';

function Navbar2() {
  return (
    <>
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Vida Silvestre</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Que hacemos?</Nav.Link>
            <Nav.Link href="#features">Habitad Natural</Nav.Link>
            <Nav.Link href="#pricing">Contactanos!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar2;