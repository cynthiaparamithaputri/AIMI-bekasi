import {Navbar, Container, Form, Button} from "react-bootstrap"
import HeaderImage from "../assets/img/header-sm.gif"
import {useNavigate} from "react-router-dom"

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="login">
    <Navbar expand="lg" className="fixed-top px-lg-5 py-2">
    <Navbar.Brand href="/" className="fs-5 px-3"><i className="fa-solid fa-sm fa-chevron-left mx-2"></i>Kembali</Navbar.Brand>
    </Navbar>
    <div className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
      <div className="row d-flex justify-content-center align-items-center h-100 mt-lg-0">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={HeaderImage}
          className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div className="login-register mb-3">
            <button type="button" onClick={() => navigate("/register")} className="btn btn-floating mx-1 w-100">
            <p className="lead fw-normal mb-0">Belum Punya Akun? Register</p>
            </button>
          </div>
      <div className="login-google">
            <button type="button" onClick={() => navigate("/loginadmin")} className="btn btn-floating mx-1 w-100">
            <p className="lead fw-normal mb-0">Anda Admin / Konselor<i className="fa fa-address-card mx-2"></i></p>
            </button>
          </div>
            <p className="text-center fw-bold mx-3 my-3">Atau</p>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" />
          </Form.Group>
          <Button type="submit" onClick={() => navigate("/")}>
          Masuk
          </Button>
        </Form>
      </div>
    </div>
    </Container>
  </div>
  </div>
  )
}

export default Login