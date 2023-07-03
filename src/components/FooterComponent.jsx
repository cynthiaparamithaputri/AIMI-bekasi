import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <h3 className="fw-bold">AIMI</h3>
          <p className="desc">Asosiasi Ibu Menyusui Indonesia (AIMI) adalah organisasi nirlaba berbasis kelompok sesama ibu menyusui dengan tujuan menyebarluaskan pengetahuan dan informasi tentang menyusui serta meningkatkan angka ibu menyusui di Indonesia</p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 812-8874-6848</p>
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">person-email@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Beranda</Link>
            <Link to="/tentang">Tentang</Link>
            <Link to="/kegiatan">Kegiatan</Link>
            <Link to="daftarkonsel">Daftar Konseling</Link>
            <Link to="/infografis">Infografis</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info lebih</h5>
            <div className="subscribes">
              <input type="text" placeholder="subscribe.." />
              <button className="btn rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
        <hr className="hr" />
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">AIMI-Bekasi</span> , All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent