import { Navbar, Container, Nav } from "react-bootstrap";
import logoWebp1x from "../assets/images/hive_tool@1x.webp";
import logoWebp2x from "../assets/images/hive_tool@2x.webp";
import logoWebp3x from "../assets/images/hive_tool@3x.webp";
import logoPng1x from "../assets/images/hive_tool@1x.png";
import logoPng2x from "../assets/images/hive_tool@2x.png";
import logoPng3x from "../assets/images/hive_tool@3x.png";
import UserContext from "../components/UserContext.jsx";
import { useContext } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function CustomNavbar() {
  const { user, setUser } = useContext(UserContext);
  function logout() {
    setUser(null);
    Cookies.remove("userCookie");
  }
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ffcb05" }} sticky="top">
      <Container fluid>
        <div className="text-center">
          <Navbar.Brand href="/">
            <picture>
              <source
                type="image/webp"
                style={{ width: "60px" }}
                srcSet={`${logoWebp1x} 1x, ${logoWebp2x} 2x, ${logoWebp3x} 3x`}
              />
              <img
                className="ms-3"
                src={logoPng1x}
                style={{ width: "60px" }}
                alt=""
                srcSet={`${logoPng1x} 1x, ${logoPng2x} 2x, ${logoPng3x} 3x`}
              />
            </picture>
          </Navbar.Brand>
          <p className="mb-0 fw-bold">HIVE TOOL</p>
        </div>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" className="fw-bold" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="d-flex align-items-end navbar-nav ms-lg-auto ms-auto fw-bold">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/inspections" className="nav-link">
              Inspections
            </Link>
            <Link to="/inventory" className="nav-link">
              Inventory
            </Link>
            <Link to="/treatments" className="nav-link">
              Treatment
            </Link>
            <Link to="/harvest" className="nav-link">
              Harvest
            </Link>
            <Link to="/swarm" className="nav-link">
              Swarm Traps
            </Link>
            <Link to="/feed" className="nav-link">
              Feeding
            </Link>
            {/* <Nav.Link to="/login" className="nav-link">
              Login
            </Nav.Link> */}
            {user && (
              <Link onClick={logout} className="nav-link">
                Log Out
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
