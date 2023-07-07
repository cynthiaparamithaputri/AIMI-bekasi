import {Container, Row, Col} from "react-bootstrap"
import {semuaKelas} from "../data/index"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"

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
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5" />
                <div className="star mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <button className="btn rounded-1">{kelas.buy}</button>
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