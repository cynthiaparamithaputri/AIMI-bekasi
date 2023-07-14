import {Container, Row, Col} from "react-bootstrap"
import {semuaKelas} from "../data/index"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import { Link } from "react-router-dom"

const Kegiatan = () => {
  return (
    <div>
    <NavbarComponent />
    <div className="kegiatan-page">
      <div className="kegiatan min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Semua Kegiatan</h1>
          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam assumenda eum provident modi quod obcaecati, architecto fugit cum rerum at itaque facilis quidem explicabo magnam recusandae quos quasi, nemo voluptatum?</p>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((kelas) => {
              return <Col key={kelas.id}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-3" />
                <div className="card-title mb-5 px-3">
                <h5>{kelas.title}</h5>
                </div>
                <hr className="hr" />
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <Link to={kelas.buy}>Detail</Link>
                </div>
              </Col>
            })}
        </Row>
      </Container>
    </div>
    </div>
    <FooterComponent />
    </div>
  )
}

export default Kegiatan