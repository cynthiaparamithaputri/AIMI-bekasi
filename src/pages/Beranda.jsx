import {Container, Row, Col} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import HeaderImage from "../assets/img/header-sm.gif"
import {kelasTerbaru} from "../data/index"
import {useNavigate} from "react-router-dom"
import FaqComponent from "../components/FaqComponent"

const Beranda = () => {
  let navigate = useNavigate();

  return (
    <div>
    <NavbarComponent />
    <div className="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
            <h1 className="mb-4">Asosiasi<br/><span className="fw-bold">Ibu Menyusui</span><br/>Indonesia</h1>
            <p className="mb-4">Asosiasi Ibu Menyusui Indonesia (AIMI) adalah organisasi nirlaba berbasis kelompok sesama ibu menyusui dengan tujuan menyebarluaskan pengetahuan dan informasi tentang menyusui serta meningkatkan angka ibu menyusui di Indonesia.</p>
            <div className="d-flex"><button className="btn btn-outline-dark btn-md shadow rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/tentang")}>Tentang Kami</button>
            <button className="btn btn-dark btn-md shadow rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/daftarkonsel")}>Daftar Konseling<i className="fa-solid fa-chevron-right ms-2"></i></button>
            </div>
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
            <h1 className="text-center fw-bold">Ayo Ikuti Kegiatan Kami!</h1>
            <p className="text-center">Berikut adalah jadwal kegiatan-kegiatan terbaru yang dapat diikuti pada ibu menyusui Bekasi</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return <Col key={kelas.id}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5" />
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
            <button className="btn rounded-5 btn-lg px-4 fw-bold" onClick={() => navigate("/kegiatan")}>Lihat Semua Kegiatan <i className="fa-solid fa-chevron-right ms-2"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faq-home">
      <FaqComponent />
      </div>
    </div>
    <FooterComponent />
    </div>
  )
}

export default Beranda