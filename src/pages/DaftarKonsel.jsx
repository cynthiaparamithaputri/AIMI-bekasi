import {Container, Row, Col, Form, Button, Carousel} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import CarouselImageChat from "../assets/img/carousel1.jpg"
import CarouselImageHome from "../assets/img/carousel2.jpg"

const DaftarKonsel = () => {
  return (
    <div>
    <NavbarComponent />
    <div className="dafkon-page">
      <div className="dafkon min-vh-100">
      <Container>
      <Row className="mb-5">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={CarouselImageChat}
          alt="First slide"
        />
      <Carousel.Caption>
        <h3>Konseling Online</h3>
        <p>TERSEDIA</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={CarouselImageHome}
          alt="Second slide"
        />
      <Carousel.Caption>
        <h3>Konseling Home Visit</h3>
        <p>COMING SOON</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Row>
      <hr className="hr" />
      <Row className="my-5">
        <h1 className="fw-bold text-center mb-2">Daftar Konseing</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Row>
      <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address.ControlTextarea1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>No WA</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridInfo">
          <Form.Label>Mendapat Informasi AIMI Dari</Form.Label>
          <Form.Control placeholder="Contoh: Instagram, dll." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMedia">
        <Form.Label>Media Konseling</Form.Label>
        <Form.Select>
        <option>Pilih</option>
        <option value="1">Chat Whatsapp</option>
        <option value="2">Telepon</option>
        <option value="3">Video Call</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby1">
          <Form.Label>Nama Bayi</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby2">
          <Form.Label>Usia Bayi Saat Ini</Form.Label>
          <Form.Control placeholder="Dalam bentuk bulan.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby3">
          <Form.Label>Bayi Anak Ke</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBaby4">
          <Form.Label>Usia Kehamilan Saat Bayi Lahir</Form.Label>
          <Form.Control placeholder="Dalam bentuk minggu.." />
        </Form.Group>

        <hr className="hr" />
        
        <Form.Group className="mb-3 mt-4" controlId="formGridBirth">
          <Form.Label className="radio-label">Proses Kelahiran </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="first radio"
              name="radioBirth"
              id="radioBirth1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="second radio"
              name="radioBirth"
              id="radioBirth2"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="third radio"
              name="radioBirth"
              id="radioBirth3"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridIMD">
          <Form.Label className="radio-label">Apakah Menjalankan Inisiasi Menyusui Dini (IMD) Setelah Melahirkan Selama 1 Jam? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioIMD"
              id="radioIMD1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioIMD"
              id="radioIMD2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridRawat">
          <Form.Label className="radio-label">Apakah Rawat Gabung Ibu dan Bayi 24 Jam Nonstop Setelah Kelahiran? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioRawat"
              id="radioRawat1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioRawat"
              id="radioRawat2"
            />
        </Form.Group>

        <hr className="hr" />

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBaby5">
          <Form.Label>Berat Bayi Saat Lahir</Form.Label>
          <Form.Control placeholder="Kilogram.." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBaby6">
          <Form.Label>Berat Bayi Saat Ini</Form.Label>
          <Form.Control placeholder="Kilogram.." />
        </Form.Group>
        </Row>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridAsupan">
          <Form.Label className="radio-label">Apakah Pada Saat Ini Bayi Anda Mendapatkan Asupan Lain Selain ASI? (Susu Formula / Makanan / Minuman..) </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioAsupan"
              id="radioAsupan1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioAsupan"
              id="radioAsupan2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridAsupan2">
          <Form.Label>Jika ya, sebutkan</Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridBotol">
          <Form.Label className="radio-label">Apakah Bayi Menggunakan Botol, Dot, dan Empeng? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioBotol"
              id="radioBotol1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioBotol"
              id="radioBotol2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridJaundice">
          <Form.Label className="radio-label">Apakah Bayi Mempunyai Riwayat Kuning? (Jaundice) </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioJaundice"
              id="radioJaundice1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioJaundice"
              id="radioJaundice2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridMPASI">
          <Form.Label className="radio-label">Apakah Bayi Sudah Mulai MPASI? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Sudah"
              name="radioMPASI"
              id="radioMPASI1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Belum"
              name="radioMPASI"
              id="radioMPASI2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridMPASI2">
          <Form.Label>Jika Sudah MPASI, Apa Yang Diberikan?</Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridKonsul">
          <Form.Label className="radio-label">Apakah Sebelumnya Sudah Pernah Berkonsultasi Dengan Konselor Menyusui atau Konsultan Laktasi? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Sudah"
              name="radioKonsul"
              id="radioKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Belum"
              name="radioKonsul"
              id="radioKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridHamilKonsul2">
          <Form.Label className="radio-label">Apakah Selama Kehamilan Sudah Mengikuti Kelas Persiapan Menyusui atau Konseling Persiapan Menyusui? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Sudah"
              name="radioHamilKonsul"
              id="radioHamilKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Belum"
              name="radioHamilKonsul"
              id="radioHamilKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridHamilKonsul2">
          <Form.Label className="radio-label">Apakah Selama Kehamilan Sudah Mengikuti Kelas Persiapan Menyusui atau Konseling Persiapan Menyusui? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Sudah"
              name="radioHamilKonsul"
              id="radioHamilKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Belum"
              name="radioHamilKonsul"
              id="radioHamilKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridHamilKonsul2">
          <Form.Label className="radio-label">Apakah Selama Kehamilan Sudah Mengikuti Kelas Persiapan Menyusui atau Konseling Persiapan Menyusui? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Sudah"
              name="radioHamilKonsul"
              id="radioHamilKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Belum"
              name="radioHamilKonsul"
              id="radioHamilKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
    </Container>
    </div>
    <FooterComponent />
    </div>
    </div>
  )
}

export default DaftarKonsel