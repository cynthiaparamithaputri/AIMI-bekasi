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
        <h3>[ Konseling Online ]</h3>
        <p>WhatsApp Chat / WhatsApp Call</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={CarouselImageHome}
          alt="Second slide"
        />
      <Carousel.Caption>
        <h3>[ Konseling Home Visit ]</h3>
        <p>COMING SOON</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Row>
      <hr className="hr" />
      <Row className="dafkon-header my-5 p-5 shadow-sm">
        <h1 className="fw-bold text-center mb-3">Daftar Konseling</h1>
        <p className="text-justify">Konseling via WhatsApp Chat/WhatsApp Call ini hanya di lakukan dalam masa pandemic #COVID19 karena AIMI sampai saat ini masih belum memungkinkan untuk melakukan konseling HOME VISIT. Konseling via WhatsApp Chat/WhatsApp Call ini TIDAK DAPAT MENGGANTIKAN PERAN KONSELING TATAP MUKA. Konselor menyusui AIMI tetap akan merujuk ke dokter atau fasilitas kesehatan apabila di perlukan.
        <br/><br/>Jika anda berminat untuk melakukan konseling via WhatsApp Chat/WhatsApp Call, Mohon diisi formulir berikut dan admin konseling akan menghubungi Konselor Menyusui, membuat jadwal konseling dan menghubungi Anda kembali. Informasi yang Anda berikan dalam formulir konseling akan berguna bagi konselor yang akan memberikan pelayanan konseling untuk anda.
        <br/><br/>Mulai tanggal 1 Agustus 2020 konseling via WhatsApp ini akan dikenakan donASI sebesar Rp 80.000 per konseling, DonASI dapat ditransfer ke rekening AIMI Bekasi di bank BCA KCP Buaran Jaya,  No. Rek : 6330898346, Atas nama: Nurul Indriati.
        <br/><br/>Konseling akan dilakukan setelah Admin Konseling AIMI Cabang Bekasi menerima bukti transfer dari klien.</p>
      </Row>
      <hr className="hr" />
      <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Nama Ibu</Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="FormGridAlamat">
          <Form.Label>Alamat Lengkap</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <hr className="hr" />

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

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridInfo">
          <Form.Label>Mendapat Informasi AIMI Dari</Form.Label>
          <Form.Control placeholder="Contoh: Instagram, dll." />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridMedia">
        <Form.Label>Media Konseling</Form.Label>
        <Form.Select>
        <option>Pilih</option>
        <option value="1">WhatsApp Chat</option>
        <option value="2">WhatsApp Call</option>
        </Form.Select>
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridBaby1">
          <Form.Label>Nama Bayi</Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridBaby2">
          <Form.Label>Usia Bayi Saat Ini</Form.Label>
          <Form.Control placeholder="Dalam bentuk BULAN.." />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridBaby3">
          <Form.Label>Bayi Anak Ke</Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridBaby4">
          <Form.Label>Usia Kehamilan Saat Bayi Lahir</Form.Label>
          <Form.Control placeholder="Dalam bentuk Minggu.." />
        </Form.Group>

        <hr className="hr" />
        
        <Form.Group className="mb-3 mt-4" controlId="formGridBirth">
          <Form.Label className="radio-label">Proses Kelahiran </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Normal per vaginam"
              name="radioBirth"
              id="radioBirth1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Caesar/SC"
              name="radioBirth"
              id="radioBirth2"
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
          <Form.Label>Berat Bayi Saat Lahir (Kg)</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBaby6">
          <Form.Label>Berat Bayi Saat Ini (Kg)</Form.Label>
          <Form.Control />
        </Form.Group>
        </Row>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridAsupan">
          <Form.Label className="radio-label">Apakah Pada Saat Ini Bayi Anda Mendapatkan Asupan Lain Selain ASI? (Susu Formula / Makanan / Minuman lainnya) </Form.Label>
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
          <Form.Label>Jika ya, sebutkan. jawab (-) jika tidak
          </Form.Label>
          <Form.Control />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridBotol">
          <Form.Label className="radio-label">Apakah Bayi Menggunakan Botol, Dot, atau Empeng? </Form.Label>
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
          <Form.Label className="radio-label">Apakah Bayi Sudah Mulai MPASI?</Form.Label>
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
          <Form.Label>Jika Sudah MPASI, Apa Yang Diberikan?
          <br/><br/>JAWAB (-) JIKA BAYI BELUM DIBERI MPASI.
          <br/><br/>JIKA SUDAH DIBERIKAN MPASI: TULISKAN BERDASARKAN PERTANYAAN DIBAWAH INI:
          <br/>1. Frekuensi pemberian makan (Berapa kali dalam sehari)
          <br/>2. Jumlah/Porsi persekali makan (Contoh: 1-2 sdm atau 1/2 mangkok ukuran 250 ml)
          <br/>3. Tekstur/kekentalan (Encer seperti asi/air, kental, cincang, iris, makanan keluarga)
          <br/>4. Variasi/jenis bahan makanan (Apa saja yang sudah diberikan:karbohidrat, protein, buah dan sayur, contoh: nasi, ikan kembung, sayur bening bayam, pisang)
          </Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridKonsul">
          <Form.Label className="radio-label">Apakah Sebelumnya Sudah Pernah Berkonsultasi Dengan Konselor Menyusui atau Konsultan Laktasi? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioKonsul"
              id="radioKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioKonsul"
              id="radioKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridHamilKonsul2">
          <Form.Label className="radio-label">Apakah Selama Kehamilan Sudah Mengikuti Kelas Persiapan Menyusui atau Konseling Persiapan Menyusui? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioHamilKonsul"
              id="radioHamilKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioHamilKonsul"
              id="radioHamilKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridHamilKonsul3">
          <Form.Label className="radio-label">Apakah selama pemberian MPASI sudah mengikuti kelas MPASI atau konseling MPASI? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioMPASIKonsul"
              id="radioMPASIKonsul1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioMPASIKonsul"
              id="radioMPASIKonsul2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridJenis">
          <Form.Label className="radio-label">Konseling yang diinginkan saat ini</Form.Label>
          <Form.Select>
            <option>Pilih</option>
            <option value="1">Konseling persiapan kehamilan dan persalinan</option>
            <option value="2">Konseling Menyusui</option>
            <option value="2">Konseling MPASI</option>
          </Form.Select>
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3" controlId="formGridMasalah">
          <Form.Label>CERITAKAN Masalah menyusui atau Masalah MPASI yang sedang dihadapi saat ini?
            <br/>Harap anda menceritakan masalah anda sejelas mungkin untuk mempermudah proses konseling</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridBantu">
          <Form.Label className="radio-label">Apakah dirumah ibu mendapatkan bantuan dari suami atau anggota keluarga lain dalam merawat bayi/mengurus rumah/mengurus anak yang lebih tua jika ada? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioBantuan"
              id="radioBantuan1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioBantuan"
              id="radioBantuan2"
            />
        </Form.Group>

        <hr className="hr" />

        <Form.Group className="mb-3 mt-4" controlId="formGridDukung">
          <Form.Label className="radio-label">Apakah suami dan keluarga mendukung ibu untuk menyusui atau pemberian MPASI yang tepat sesuai anjuran? </Form.Label>
          <Form.Check className="mb-2"
              type="radio"
              label="Ya"
              name="radioDukung"
              id="radioDukung1"
            />
            <Form.Check className="mb-2"
              type="radio"
              label="Tidak"
              name="radioDukung"
              id="radioDukung2"
            />
        </Form.Group>

        <hr className="hr" />

        <Button className="mt-3" type="submit">
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