import NavbarKonselor from "../components/NavbarKonselor"
import {Container, Row, Col} from "react-bootstrap"
import KonselKonselorComp from "../components/KonselKonselorComp"

const KonselingKonselor = () => {
  return (
    <div className="container-fluid dk-page min-vh-100">
        <NavbarKonselor />
        <div className="data-konseling w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Data Konseling Anda</h1>
                    <KonselKonselorComp />
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default KonselingKonselor