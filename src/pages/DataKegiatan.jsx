import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col, Button} from "react-bootstrap"
import DataKegComp from "../components/DataKegComp"

const DataKegiatan = () => {
  return (
    <div className="container-fluid data-kegiatan-page min-vh-100">
        <NavbarAdmin />
        <div className="data-kegiatan w-100 min-vh-100">
        <Container>
            <Col>
                <Row className="btn-tambah text-center">
                  <div>
                  <Button size="lg">Tambah Kegiatan Baru<i className="bi bi-calendar-plus mx-2"></i></Button>
                  </div>
                </Row>
                <hr className="hr" />
                <Row>
                    <h1 className="fw-bold text-center mb-5 mt-5">Data Kegiatan</h1>
                    <DataKegComp />
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default DataKegiatan