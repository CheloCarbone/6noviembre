import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from './slider/index'
import Contact from './Contact/Form'
import AutoLayoutExample from './texto/texto'
import ResponsiveAutoExample from './imagencondesplegable/index2'
import Slider2 from './Contact/slider2/slider2'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles2.css';

function App() {
  return (
    <div className="App">
      <div><Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Vida Silvestre</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#textual">Que hacemos?</Nav.Link>
            <Nav.Link href="#habitat">Habitat Natural</Nav.Link>
            <Nav.Link href="#contacto">Contactanos!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
     <div>
   <Gallery />
   </div>
   <div id="textual">
    <AutoLayoutExample />
    </div>
      <ResponsiveAutoExample />
    <div id="habitat">
   <Slider2/>
   </div>
   <div id="contacto">
    <Contact />
    </div>
    </div>
  );
}

export default App;
