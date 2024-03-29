import { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserContext from "../components/UserContext.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import CustomNavbar from "../components/CustomNavbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

import logoWebp1x from "../assets/images/hive_tool@1x.webp";
import logoWebp2x from "../assets/images/hive_tool@2x.webp";
import logoWebp3x from "../assets/images/hive_tool@3x.webp";
import logoPng1x from "../assets/images/hive_tool@1x.png";
import logoPng2x from "../assets/images/hive_tool@2x.png";
import logoPng3x from "../assets/images/hive_tool@3x.png";
import LoadSpinner from "../components/Spinner.jsx";

const form_default = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(form_default);
  const [message, setMessage] = useState(null);
  const { setUser } = useContext(UserContext);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    //   try {
    //     const response = await axios
    //       .post("http://localhost:5555/user/login", form, {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       })
    //       .then(() => {
    //         setLoading(false);
    //         navigate("/");
    //       });

    //     const data = response.data;

    //     if (response.status === 200 && data.user) {
    //       const userId = data.user._id;
    //       Cookies.set("userCookie", userId);
    //       setUser(data.user);
    //     } else {
    //       console.log(data.error);
    //       setMessage(data.message);
    //     }
    //   } catch (error) {
    //     console.error("An error occurred:", error);
    //     setMessage("An error occurred while processing your request.");
    //   }
    //   setLoading(false);
    // };

    const response = await fetch("http://localhost:5555/user/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const _response = await response.json();

    if (response.ok && _response.user) {
      const userId = _response.user._id;
      Cookies.set("userCookie", userId);
      setUser(_response.user);
    } else {
      console.log(_response.error);
      return setMessage(_response.message);
    }
  };

  return (
    <>
      <CustomNavbar />
      {/* {loading && <LoadSpinner />} */}
      <Row className="justify-content-center mb-0">
        <div className="d-flex justify-content-center">
          <picture>
            <source
              type="image/webp"
              srcSet={`${logoWebp1x} 1x, ${logoWebp2x} 2x, ${logoWebp3x} 3x`}
            />
            <img
              className="ms-3"
              src={logoPng1x}
              alt=""
              srcSet={`${logoPng1x} 1x, ${logoPng2x} 2x, ${logoPng3x} 3x`}
            />
          </picture>
        </div>
      </Row>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p style={{ color: "#ab0a0a", textAlign: "center" }}>{message}</p>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  autoComplete="current-email"
                  value={form.email}
                  placeholder="Email..."
                  className="text-center bg-inputgrey text-white border-3 border-michgold rounded-4 opacity-85 fw-bold"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  autoComplete="current-password"
                  value={form.password}
                  placeholder="Password..."
                  className="text-center bg-inputgrey text-white border-3 border-michgold rounded-4 opacity-85 fw-bold my-2"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Button
                  type="submit"
                  className="btn-michgold btn-gold rounded-pill px-5 m-3 mb-2 mt-1"
                >
                  LOGIN
                </Button>
                <a
                  href="/register"
                  className="d-block text-center fs-4 text-michgold"
                >
                  Create Account
                </a>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
