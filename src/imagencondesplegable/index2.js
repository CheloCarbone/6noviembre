import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./acordeon/styles.css"
import FlushExample from './acordeon/index'

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
            <div class="acord">
                 <FlushExample/>
        </div>
        </Col>
        <Col sm={4}>       
             <div class="centrado">
             <img src ="https://images.unsplash.com/photo-1471644303053-08771e8493d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"/>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;