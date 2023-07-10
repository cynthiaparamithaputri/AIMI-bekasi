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
        <p>TERSEDIA</p>
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
      <hr className="hr" />
      <Row className="my-5">
        <h1 className="fw-bold text-center mb-2">Daftar Konseing</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Row>
      <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address.ControlTextarea1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>No WA</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridInfo">
          <Form.Label>Mendapat Informasi AIMI Dari</Form.Label>
          <Form.Control placeholder="Contoh: Instagram, dll." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMedia">
        <Form.Label>Media Konseling</Form.Label>
        <Form.Select>
        <option>Pilih</option>
        <option value="1">Chat Whatsapp</option>
        <option value="2">Telepon</option>
        <option value="3">Video Call</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby1">
          <Form.Label>Nama Bayi</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby2">
          <Form.Label>Usia Bayi Saat Ini</Form.Label>
          <Form.Control placeholder="Isi dalam bentuk bulan.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby3">
          <Form.Label>Bayi Anak Ke</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby4">
          <Form.Label>Usia Kehamilan Saat Bayi Lahir</Form.Label>
          <Form.Control placeholder="Isi dalam bentuk minggu.." />
        </Form.Group>
        
        <Form.Group className="mb-3 mt-4" controlId="formGridBirth">
          <Form.Label className="radio-label">Proses Kelahiran: </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
    </Container>
    </div>
    <FooterComponent />
    </div>
    </div>
  )
}

export default DaftarKonsel