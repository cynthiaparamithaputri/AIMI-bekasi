import {Routes, Route} from "react-router-dom"
import Beranda from "./pages/Beranda"
import Tentang from "./pages/Tentang"
import Kegiatan from "./pages/Kegiatan"
import DaftarKonsel from "./pages/DaftarKonsel"
import Riwayat from "./pages/Riwayat"
import Login from "./pages/Login"
import LoginAdmin from "./pages/LoginAdmin"
import Register from "./pages/Register"

function App() {
return <div>
  <Routes>
    <Route path="/" Component={Beranda} />
    <Route path="/tentang" Component={Tentang} />
    <Route path="/kegiatan" Component={Kegiatan} />
    <Route path="/daftarkonsel" Component={DaftarKonsel} />
    <Route path="/riwayat" Component={Riwayat} />
    <Route path="/login" Component={Login} />
    <Route path="/loginadmin" Component={LoginAdmin} />
    <Route path="/register" Component={Register} />
  </Routes>
</div>
}

export default App
