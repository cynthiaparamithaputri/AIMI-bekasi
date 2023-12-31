import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col, Table, Button} from "react-bootstrap"
import DetailKonselComp from "../components/DetailKonselComp"

const DetailKonseling = () => {
  return (
    <div className="container-fluid detail-page min-vh-100">
        <NavbarAdmin />
        <div className="detail-konseling w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Detail Konseling</h1>
                    <DetailKonselComp />
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default DetailKonseling