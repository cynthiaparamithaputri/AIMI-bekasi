import {Container, Row, Col} from "react-bootstrap"
import HeaderImage from "../assets/img/header-sm.gif"

const Beranda = () => {
  return (
    <div className="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4">Temukan<br/><span>Bakat Kreatifmu</span><br/>Bersama Kami!</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper enim. Curabitur vitae fermentum diam, at consequat magna. Vivamus id magna ac est sagittis ornare. Phasellus ex mi, mattis ut risus in, tempor ultrices urna. Integer eu nibh id tortor mollis imperdiet. Nullam maximus fermentum urna, vitae dictum lacus venenatis in. Aliquam efficitur massa risus, in elementum magna efficitur eget. Fusce a magna tellus. Vivamus venenatis dignissim magna eu interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac dictum est, rutrum finibus justo.</p>
            <button className="btn btn-dark btn-lg rounded-1 me-2 mb-xs-0 mb-2">Daftar</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeaderImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="1w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1></h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Beranda