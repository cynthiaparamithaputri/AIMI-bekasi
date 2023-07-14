import {Table, Button} from "react-bootstrap"
import example from "../assets/img/kelas/kegiatan-1.webp"

const DataKegComp = () => {
  return (
    <div className="dk-comp">
        <Table responsive className="table-bordered">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Kegiatan</th>
            <th scope="col">Jadwal</th>
            <th scope="col" className="col-md-6">Deskripsi</th>
            <th scope="col">Gambar</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>IG Live Sharing Session</td>
            <td>Minggu, 14 Mei 2023</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique ratione reiciendis maiores enim. Consequuntur rem quia totam laudantium inventore corrupti possimus molestiae, reiciendis ipsam officiis, molestias odio ut quo.</td>
            <td>
            <div class="keg-image text-center">
                <img src={example} class="rounded" alt="..." />
            </div>
            </td>
            <td>
                <Button className="btn-sm" variant="primary">Sunting</Button>{' '}
                <Button className="btn-sm" variant="danger">Hapus</Button>
            </td>
            </tr>
        </tbody>
        </Table>
        <div className="d-flex justify-content-start">
          <p className="fw-bold">Jumlah Data: 1</p>
        </div>
    </div>
  )
}

export default DataKegComp