import {Container, Row, Col} from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import FaqComponent from "../components/FaqComponent"

const Tentang = () => {
  return (
    <div>
    <NavbarComponent />
    <div className="tentang-page">
      <div className="tentang min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center mb-2">Tentang Kami</h1>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <p>Asosiasi Ibu Menyusui Indonesia (AIMI) adalah organisasi nirlaba berbasis kelompok sesama ibu menyusui dengan tujuan menyebarluaskan pengetahuan dan informasi tentang menyusui serta meningkatkan angka ibu menyusui di Indonesia. Berdiri pada tanggal 21 April 2007, saat ini AIMI terdapat di 19 daerah/provinsi yakni Aceh, Sumatra Utara, Bangka Belitung, Sumatra Barat, Jambi, Lampung, Kepulauan Riau, Sumatra Selatan, Jawa Barat, Jawa Tengah, Yogyakarta, Jawa Timur, Bali, Kalimantan Barat, Kalimantan Timur, Kalimantan Selatan, Sulawesi Selatan, Nusa Tenggara Barat, dan Pusat (DKI Jakarta). Serta memiliki cabang di 11 kotamadya/kabupaten di luar ibu kota provinsi yakni Depok, Cirebon, Bekasi, Bogor, Solo, Purwokerto, Bantul, Malang, Sorowako, Madiun, Sanggau, dan Bukittinggi. Sekretariat AIMI berkedudukan di DKI Jakarta.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">Visi AIMI</h4>
            <p>Menjadi kelompok pendukung ibu andalan masyarakat dan berperan utama dalam peningkatan angka ibu menyusui di Indonesia melalui penyelenggaraan kegiatan-kegiatan promosi, edukasi, dan advokasi mengenai menyusui.</p>
            <h4 className="fw-bold">Misi AIMI</h4>
            <p>1. Meningkatkan pemahaman seluruh elemen masyarakat tentang keutamaan menyusui selama dua tahun atau lebih serta risiko pemberian formula bagi bayi melalui upaya komunikasi kreatif.
              <br/>2. Memberikan informasi, pengetahuan, dan dukungan bagi para ibu untuk menyusui bayinya secara eksklusif selama 6 bulan dan meneruskannya sampai 2 tahun atau lebih, agar setiap ibu di Indonesia memiliki pengetahuan dan informasi yang cukup akan keutamaan menyusui serta Makanan Pendamping ASI rumahan berbahan pangan lokal yang berkualitas.
              <br/>3. Memperkuat hubungan kerja sama dengan pemerintah, perusahaan, mitra gerakan, lembaga donor dan pemangku kepentingan lainnya di semua tingkatan dalam rangka menjalankan fungsi pengawasan peraturan yang mendukung para ibu untuk menyusui bayinya.</p>
            </Col>
          </Row>
          <div className="faq-tentang">
            <FaqComponent />
          </div>
        </Container>
      </div>
    </div>
    <FooterComponent />
    </div>
  )
}

export default Tentang