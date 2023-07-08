import {Container, Row, Col, Form, Button, Carousel} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import CarouselImageChat from "../assets/img/carousel1.jpg"
import CarouselImageHome from "../assets/img/carousel2.jpg"

const DaftarKonsel = () => {
  return (
    <div>
    <NavbarComponent />
    <div className="dafkon-page">
      <div className="dafkon min-vh-100">
      <Container>
      <Row className="my-5">
        <h1 className="fw-bold text-center mb-2">Daftar Konseing</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Row>
      <Row className="mb-5">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={CarouselImageChat}
          alt="First slide"
        />
      <Carousel.Caption>
        <h3>Konseling Online</h3>
        <p>AVAILABLE NOW</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={CarouselImageHome}
          alt="Second slide"
        />
      <Carousel.Caption>
        <h3>Konseling Home Visit</h3>
        <p>COMING SOON</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Row>
        <Form>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
    <FooterComponent />
    </div>
    </div>
  )
}

export default DaftarKonsel