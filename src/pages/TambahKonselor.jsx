import {Container, Row, Col, Form, Button} from "react-bootstrap"
import NavbarAdmin from "../components/NavbarAdmin"

const TambahKonselor = () => {
  return (
    <div className="container-fluid tambah min-vh-100">
      <NavbarAdmin />
        <div className="tambah-kegkon w-100 min-vh-100">
        <Container>
          <Row className="tambah-row">
          <h1 className="fw-bold text-center mb-5">Tambah Konselor</h1>
          <Form>

          <Form.Group className="mb-3" controlId="formGridNamaKon">
            <Form.Label>Nama Konselor</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridWAKon">
            <Form.Label>No WA</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmailKon">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Button className="mt-3" type="submit">
            Submit
          </Button>
        
        </Form>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default TambahKonselor