import NavbarKonselor from "../components/NavbarKonselor";
import {Container, Row, Col, Image} from "react-bootstrap"
import Image1 from "../assets/img/carousel1.jpg"
import { useNavigate } from "react-router-dom"

function Konselor() {
  let navigate = useNavigate();

  return (
    <div className="container-fluid admin-page min-vh-100">
        <NavbarKonselor />
        <div className="admin w-100 min-vh-100">
        <Container>
          <Col>
            <Row className="text-center">
              <h1 className="display-1 fw-bold">HAI, KONSELOR!</h1>
              <h5 className="fw-bold">Lihat Data yang Tersedia<i className="bi bi-"></i></h5>
            </Row>
          </Col>
            <div className="click-images d-flex flex-wrap justify-content-center">
              <div className="card bg-dark text-white m-1" onClick={() => navigate("/konselkonselor")}>
                <Image src={Image1} className="opacity-50" rounded />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h5 className="card-title">KONSELING</h5>
                </div>
              </div>
              <div className="card bg-dark text-white m-1" onClick={() => navigate("/feedbackkonselor")}>
                <Image src={Image1} className="opacity-50" rounded />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h5 className="card-title">FEEDBACK</h5>
                </div>
              </div>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Konselor