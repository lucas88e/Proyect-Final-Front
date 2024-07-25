import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { useShoppingCarContext } from '../context/shoppingCarContext';

function NavBars() {
  const { items } = useShoppingCarContext();
  const getItemCount = () => items.length;
  const [isLoginPage, setIsLoginPage] = useState(false)


  return (
    <Navbar collapseOnSelect expand="lg" fixed='top' className="p-4" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="px-5" href="/">Bazar Subastas Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/pujas">Tus Pujas</Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/ropa">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="/electronica">Electrónica</NavDropdown.Item>
              <NavDropdown.Item href="/hogar">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="/mascotas">Mascotas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categorias">Todas las Categorías</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <button onClick={() => setIsLoginPage(!isLoginPage)}>Logout</button>
          {isLoginPage ? <Login/> :
            <Nav.Link href="/login">Login</Nav.Link>}
            <Nav.Link  href="/cart">
            <IconButton edge="end" color="inherit">
               
                  <ShoppingCartIcon />
               
              </IconButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
