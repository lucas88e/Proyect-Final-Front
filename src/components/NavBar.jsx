import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBars() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' className="p-4"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="px-5" href="/">Bazar Subastas Onine</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos" >Productos</Nav.Link>
            <Nav.Link href="#pricing">Tus Pujas</Nav.Link>
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Electrodomésticos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Mascotas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;