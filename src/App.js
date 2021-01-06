import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import { SignUpWizard } from "./components/wizard";

import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Login from "./components/Login";
import TheTeam from "./components/TheTeam";
import jmeetLogo from "../src/images/jmeet.png";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <div>
        <Navbar className="nav-bar">
          <Navbar.Brand as={Link} to="/">
            <img
              alt="jmeet logo"
              src={jmeetLogo}
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="colorNav">
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={2} href="/about-us">
                <Nav.Link as={Link} to="/about-us">
                  About Us
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={3} href="/the-team">
                <Nav.Link as={Link} to="/the-team">
                  The Team
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={4} href="/login">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/the-team" component={TheTeam} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUpWizard} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
