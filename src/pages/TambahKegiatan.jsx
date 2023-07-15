import {Container, Row, Col, Form, Button} from "react-bootstrap"
import NavbarAdmin from "../components/NavbarAdmin"

const TambahKegiatan = () => {
  return (
    <div className="container-fluid tambah min-vh-100">
      <NavbarAdmin />
        <div className="tambah-kegkon w-100 min-vh-100">
        <Container>
          <Row className="tambah-row">
          <h1 className="fw-bold text-center mb-5">Tambah Kegiatan</h1>
          <Form>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridJudul">
            <Form.Label>Nama Kegiatan</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTGL">
            <Form.Label>Jadwal</Form.Label>
            <Form.Control placeholder="Contoh: Sabtu, 15 Juli 2023" />
          </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="FormGridDesk">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Upload Foto</Form.Label>
            <Form.Control type="file" />
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

export default TambahKegiatan