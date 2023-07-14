import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col} from "react-bootstrap"
import DataKonselComp from "../components/DataKonselComp"

const DataKonseling = () => {
  return (
    <div className="container-fluid dk-page min-vh-100">
        <NavbarAdmin />
        <div className="data-konseling w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Data Konseling</h1>
                    <DataKonselComp />
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default DataKonseling