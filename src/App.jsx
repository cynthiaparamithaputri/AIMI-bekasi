import {Routes, Route} from "react-router-dom"
import Beranda from "./pages/Beranda"
import Tentang from "./pages/Tentang"
import Kegiatan from "./pages/Kegiatan"
import DaftarKonsel from "./pages/DaftarKonsel"
import Riwayat from "./pages/Riwayat"
import Login from "./pages/Login"
import LoginAdmin from "./pages/LoginAdmin"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import DataKegiatan from "./pages/DataKegiatan"
import DataKonseling from "./pages/DataKonseling"
import DataKonselor from "./pages/DataKonselor"

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
    <Route path="/admin" Component={Admin} />
    <Route path="/datakegiatan" Component={DataKegiatan} />
    <Route path="/datakonseling" Component={DataKonseling} />
    <Route path="/datakonselor" Component={DataKonselor} />
  </Routes>
</div>
}

export default App
