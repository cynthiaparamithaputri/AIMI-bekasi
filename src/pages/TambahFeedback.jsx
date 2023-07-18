import {Container, Row, Col, Button, Form} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import { useNavigate } from "react-router-dom"

const TambahFeedback = () => {
  let navigate = useNavigate();

  return (
    <div>
    <NavbarComponent />
    <div className="riwayat-page">
      <div className="riwayat min-vh-100">
        <Container>
          <Col>
              <Row>
                <h1 className="fw-bold text-left mt-5 mb-5">Masukkan Feedback Anda</h1>
              </Row>
              <hr className="hr" />
              <Row className="mt-5">
              <div className="dk-comp">
              <Form className="fb-form">
                <Form.Group className="mb-3" controlId="FormGridDesk">
                    <Form.Label>*Kami sangat menghargai ulasan anda</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="fb-outline btn-md m-1" onClick={() => navigate("/riwayat")}>Kembali</Button>
                <Button className="btn-md m-1" type="submit">Submit</Button>
              </Form>
            </div>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
    <FooterComponent />
    </div>
  )
}

export default TambahFeedback