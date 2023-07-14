import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col, Image} from "react-bootstrap"
import Image1 from "../assets/img/carousel1.jpg"
import { useNavigate } from "react-router-dom"

function Admin() {
  let navigate = useNavigate();

  return (
    <div className="container-fluid admin-page min-vh-100">
        <NavbarAdmin />
        <div className="admin w-100 min-vh-100">
        <Container>
          <Col>
            <Row className="text-center">
              <h1 className="display-1 fw-bold">HAI, ADMIN!</h1>
              <h5 className="fw-bold">Mulai Pengelolaan Sekarang<i className="bi bi-"></i></h5>
            </Row>
          </Col>
            <div className="click-images d-flex flex-wrap justify-content-center">
              <div className="card bg-dark text-white m-1" onClick={() => navigate("/tambahkegiatan")}>
                <Image src={Image1} className="opacity-50" rounded />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h5 className="card-title">TAMBAH KEGIATAN</h5>
                </div>
              </div>
              <div className="card bg-dark text-white m-1" onClick={() => navigate("/datakonseling")}>
                <Image src={Image1} className="opacity-50" rounded />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <h5 className="card-title">KELOLA KONSELING</h5>
                </div>
              </div>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Admin