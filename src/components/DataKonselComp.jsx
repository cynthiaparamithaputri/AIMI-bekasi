import {Table, Form, Button, Row, Col} from "react-bootstrap"

const DataKonselComp = () => {
  return (
    <div className="dk-comp">
        <div className="d-flex justify-content-end">
        <Row className="align-items-center">
        <Col xs="auto" className="p-0">
        <Form className="d-flex">
        <Form.Group controlId="formGridMonth">
              <Form.Select>
              <option>Bulan</option>
              <option value="1">Januari</option>
              <option value="2">Februari</option>
              <option value="3">Maret</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">Agustus</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Desember</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formGridYear">
              <Form.Select>
              <option>Tahun</option>
              <option value="2023">2023</option>
              </Form.Select>
          </Form.Group>
        </Form>
        </Col>
        <Col xs="auto">
        <Form className="d-flex">
            <Form.Group controlId="FormSearch">
              <Form.Control type="text" placeholder="Masukkan keyword..." />
            </Form.Group>
            <Button variant="primary" type="submit">Cari</Button>
        </Form>
        </Col>
        </Row>
        </div>
        <Table responsive className="table-bordered">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Waktu</th>
            <th scope="col">Nama</th>
            <th scope="col" className="col-md-6">Masalah yang Dihadapi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>14/07/2023 11:25</td>
            <td>Cynthia Paramitha</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique ratione reiciendis maiores enim. Consequuntur rem quia totam laudantium inventore corrupti possimus molestiae, reiciendis ipsam officiis, molestias odio ut quo.</td>
            </tr>
        </tbody>
        </Table>
        <div className="d-flex justify-content-start">
          <p className="fw-bold">Jumlah Data: 1</p>
        </div>
    </div>
  )
}

export default DataKonselComp