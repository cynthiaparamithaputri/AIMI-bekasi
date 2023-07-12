const SideBar = () => {
  return (
    <div className="bg-white sidebar p-2">
        <div className="logo m-2">
            <span className="brand-name me-3">AIMI Bekasi</span>
            <i className="bi bi-bootstrap-fill"></i>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-house me-3"></i>
                <span>Beranda</span>
            </a>
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-calendar me-3"></i>
                <span>kegiatan</span>
            </a>
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-book me-3"></i>
                <span>Data Konseling</span>
            </a>
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-person me-3"></i>
                <span>Konselor</span>
            </a>
            <div className="list-group-item py-5"></div>
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-person-circle me-3"></i>
                <span>Profil</span>
            </a>
            <a className="list-group-item py-2 my-1">
                <i className="bi bi-x-square me-3"></i>
                <span>Keluar</span>
            </a>
        </div>
    </div>
  )
}

export default SideBar