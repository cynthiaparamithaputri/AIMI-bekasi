import {Routes, Route} from "react-router-dom"
import Beranda from "./pages/Beranda"
import Tentang from "./pages/Tentang"
import Kegiatan from "./pages/Kegiatan"
import DaftarKonsel from "./pages/DaftarKonsel"
import HasilKonsel from "./pages/HasilKonsel"
import Infografis from "./pages/Infografis"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

function App() {
return <div>
  <NavbarComponent/>

  <Routes>
    <Route path="/" Component={Beranda} />
    <Route path="/tentang" Component={Tentang} />
    <Route path="/kegiatan" Component={Kegiatan} />
    <Route path="/daftarkonsel" Component={DaftarKonsel} />
    <Route path="/hasilkon" Component={HasilKonsel} />
    <Route path="/infografis" Component={Infografis} />
  </Routes>

  <FooterComponent />
</div>
}

export default App
