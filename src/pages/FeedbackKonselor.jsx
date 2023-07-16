import NavbarKonselor from "../components/NavbarKonselor"
import {Table, Form, Button, Container, Row, Col} from "react-bootstrap"

const FeedbackKonselor = () => {
  return (
    <div className="container-fluid dk-page min-vh-100">
        <NavbarKonselor />
        <div className="data-konseling w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Feedback Anda</h1>
                    <div className="dk-comp">
                    <Table responsive className="table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Jenis Konseling</th>
                        <th scope="col" className="col-md-4">Masalah yang Dihadapi</th>
                        <th scope="col">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1234</th>
                        <td>Cynthia Paramitha</td>
                        <td>Konseling Menyusui</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique ratione reiciendis maiores enim. Consequuntur rem quia totam laudantium inventore corrupti possimus molestiae, reiciendis ipsam officiis, molestias odio ut quo.</td>
                        <td></td>
                        </tr>
                    </tbody>
                    </Table>
                    <div className="d-flex justify-content-start">
                    <p className="fw-bold">Jumlah Data: 1</p>
                    </div>
                    </div>
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default FeedbackKonselor