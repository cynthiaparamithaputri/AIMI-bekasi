import {Container, Row, Col, Button, Table} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import { useNavigate } from "react-router-dom"
import DetailKonselComp from "../components/DetailKonselComp"

const Riwayat = () => {
  let navigate = useNavigate();

  return (
    <div>
    <NavbarComponent />
    <div className="riwayat-page">
      <div className="riwayat min-vh-100">
        <Container>
          <Col>
              <Row>
                <h1 className="fw-bold text-center mb-5">Riwayat Anda</h1>
              </Row>
              <hr className="hr" />
              <Row className="mt-5">
              <div className="dk-comp">
              <Table responsive>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Waktu Selesai</th>
                  <th scope="col">Jenis Konseling</th>
                  <th scope="col">Konselor</th>
                  <th scope="col">Feedback</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>16/07/2023 14:09</td>
                  <td>Konseling Menyusui</td>
                  <td>Konselor #1</td>
                  <td>Saya sangat puas dengan saran dan bantuan yang diberikan oleh konselor</td>
                  <td className="col-2">
                    <Button className="btn-sm m-1" onClick={() => navigate("/feedback")}>Feedback</Button>
                  </td>
                </tr>
              </tbody>
              </Table>
            </div>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
    <FooterComponent />
    </div>
  )
}

export default Riwayat