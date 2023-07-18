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
import TambahKegiatan from "./pages/TambahKegiatan"
import TambahKonselor from "./pages/TambahKonselor"
import DetailKonseling from "./pages/DetailKonseling"
import Konselor from "./pages/Konselor"
import KonselingKonselor from "./pages/KonselingKonselor"
import DetailKonselingKon from "./pages/DetailKonselingKon"
import FeedbackKonselor from "./pages/FeedbackKonselor"
import TambahFeedback from "./pages/TambahFeedback"

function App() {
return <div>
  <Routes>
    <Route path="/" Component={Beranda} />
    <Route path="/tentang" Component={Tentang} />
    <Route path="/kegiatan" Component={Kegiatan} />
    <Route path="/daftarkonsel" Component={DaftarKonsel} />
    <Route path="/riwayat" Component={Riwayat} />
    <Route path="/feedback" Component={TambahFeedback} />
    <Route path="/login" Component={Login} />
    <Route path="/loginadmin" Component={LoginAdmin} />
    <Route path="/register" Component={Register} />
    <Route path="/admin" Component={Admin} />
    <Route path="/datakegiatan" Component={DataKegiatan} />
    <Route path="/datakonseling" Component={DataKonseling} />
    <Route path="/datakonselor" Component={DataKonselor} />
    <Route path="/tambahkegiatan" Component={TambahKegiatan} />
    <Route path="/tambahkonselor" Component={TambahKonselor} />
    <Route path="/detailkonsel" Component={DetailKonseling} />
    <Route path="/konselor" Component={Konselor} />
    <Route path="/konselkonselor" Component={KonselingKonselor} />
    <Route path="/detailkonselkon" Component={DetailKonselingKon} />
    <Route path="/feedbackkonselor" Component={FeedbackKonselor} />
  </Routes>
</div>
}

export default App
