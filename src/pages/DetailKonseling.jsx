import NavbarAdmin from "../components/NavbarAdmin"
import {Container, Row, Col, Table, Button} from "react-bootstrap"

const DetailKonseling = () => {
  return (
    <div className="container-fluid detail-page min-vh-100">
        <NavbarAdmin />
        <div className="detail-konseling w-100 min-vh-100">
        <Container>
            <Col>
                <Row>
                    <h1 className="fw-bold text-center mb-5">Detail Konseling</h1>
                    <div className="dk-comp">
                        <Table responsive className="table-bordered text-nowrap">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Timestamp</th>
                            <th scope="col">Nama Ibu</th>
                            <th scope="col">Alamat Lengkap</th>
                            <th scope="col">No WA</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mendapat Informasi AIMI Dari</th>
                            <th scope="col">Media Konseling</th>
                            <th scope="col">Nama Bayi</th>
                            <th scope="col">Usia Bayi Saat Ini</th>
                            <th scope="col">Bayi Anak Ke</th>
                            <th scope="col">Usia Kehamilan Saat Bayi Lahir</th>
                            <th scope="col">Proses Kelahiran</th>
                            <th scope="col">Apakah Menjalankan Inisiasi Menyusui Dini (IMD) Setelah Melahirkan Selama 1 Jam?</th>
                            <th scope="col">Apakah Rawat Gabung Ibu dan Bayi 24 Jam Nonstop Setelah Kelahiran?</th>
                            <th scope="col">Berat Bayi Saat Lahir (Kg)</th>
                            <th scope="col">Berat Bayi Saat Ini (Kg)</th>
                            <th scope="col">Apakah Pada Saat Ini Bayi Anda Mendapatkan Asupan Lain Selain ASI? (Susu Formula / Makanan / Minuman lainnya)</th>
                            <th scope="col">Jika ya, sebutkan. jawab (-) jika tidak</th>
                            <th scope="col">Apakah Bayi Menggunakan Botol, Dot, atau Empeng?</th>
                            <th scope="col">Apakah Bayi Mempunyai Riwayat Kuning? (Jaundice)</th>
                            <th scope="col">Apakah Bayi Sudah Mulai MPASI?</th>
                            <th scope="col">Jika Sudah MPASI, Apa Yang Diberikan?</th>
                            <th scope="col">Apakah Sebelumnya Sudah Pernah Berkonsultasi Dengan Konselor Menyusui atau Konsultan Laktasi?</th>
                            <th scope="col">Apakah Selama Kehamilan Sudah Mengikuti Kelas Persiapan Menyusui atau Konseling Persiapan Menyusui?</th>
                            <th scope="col">Apakah selama pemberian MPASI sudah mengikuti kelas MPASI atau konseling MPASI?</th>
                            <th scope="col">Konseling yang diinginkan saat ini</th>
                            <th scope="col">CERITAKAN Masalah menyusui atau Masalah MPASI yang sedang dihadapi saat ini?</th>
                            <th scope="col">Apakah dirumah ibu mendapatkan bantuan dari suami atau anggota keluarga lain dalam merawat bayi/mengurus rumah/mengurus anak yang lebih tua jika ada?</th>
                            <th scope="col">Apakah suami dan keluarga mendukung ibu untuk menyusui atau pemberian MPASI yang tepat sesuai anjuran?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>14/07/2023 11:25</td>
                            <td>Cynthia Paramitha</td>
                            <td>Jl. Tanjung 4 Taman Century 2, Blok L No.5, RT 003/RW 023, Kec. Bekasi Selatan, Kel. Pekayon Jaya, Bekasi </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                        </Table>
                        <div className="d-flex justify-content-center">
                        <Button className="btn-md" variant="success">Ekspor ke CSV</Button>
                        </div>
                    </div>
                </Row>
            </Col>
        </Container>
      </div>
    </div>
  )
}

export default DetailKonseling