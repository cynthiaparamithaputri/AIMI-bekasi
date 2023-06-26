import {Container, Row, Col} from "react-bootstrap"
import HeaderImage from "../assets/img/header-sm.gif"
import {kelasTerbaru} from "../data/index"
import {useNavigate} from "react-router-dom"

const Beranda = () => {
  let navigate = useNavigate();

  return (
    <div className="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
            <h1 className="mb-4">Temukan<br/><span>Bakat Kreatifmu</span><br/>Bersama Kami!</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper enim. Curabitur vitae fermentum diam, at consequat magna.</p>
            <button className="btn btn-dark btn-lg rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/daftarkonsel")}>Daftar</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeaderImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kegiatan-home w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Ikuti Kegiatan</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper enim. Curabitur vitae fermentum diam, at consequat magna.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
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
          <Row>
            <Col className="text-center">
            <button className="btn rounded-5 btn-lg px-5 fw-bold" onClick={() => navigate("/kegiatan")}>Lihat Semua Kegiatan <i className="fa-solid fa-chevron-right ms-2"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Beranda