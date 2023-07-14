import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col, Button, Table} from "react-bootstrap"

const DataKonselor = () => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid data-konselor-page min-vh-100">
        <NavbarAdmin />
        <div className="data-konselor w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Data Konselor</h1>
                    <div className="dk-comp">
                    <Table responsive className="table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Nama</th>
                        <th scope="col">WA</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td className="col-2">
                          <Button className="btn-sm" variant="primary">Sunting</Button>
                          <Button className="btn-sm" variant="danger">Hapus</Button>
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </div>
                  <div className="btn-tambah text-center mt-5">
                    <Button size="md" onClick={() => navigate("/tambahkonselor")}>Tambah Konselor<i className="bi bi-person-plus mx-2"></i></Button>
                  </div>
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default DataKonselor