import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Badge } from "@mui/material";
import { useShoppingCarContext } from "../context/shoppingCarContext";
import { useAuth } from "../context/auth";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import {
  deepOrange,
  deepPurple,
} from "@mui/material/colors";

function NavBars() {
  const { items, user } = useShoppingCarContext();
  const getItemCount = () => items.length;
  const { isAuth, toggleAuth } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout"
      );

      toggleAuth();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Fallo de logout", error);
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="p-4"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link}  className="px-5" to="/">
        <img
              src="/logo2.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/productos">
              Productos
            </Nav.Link>

            <NavDropdown
              title="Categorías"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item as={Link}  to="/ropa">
                Ropa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/electronica">
                Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hogar">
                Hogar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mascotas">
                Mascotas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categorias">
                Todas las Categorías
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isAuth ? (
              <>
                <Link to="/cart">
                  <IconButton edge="end" color="inherit">
                    <ShoppingCartIcon className="m-2" />
                  </IconButton>
                </Link>
                <Link to="/perfil">
                  <Avatar
                    className="m-2"
                    sx={{ bgcolor: deepPurple[500] }}
                    alt={user?.username}
                    src={user?.avatar}
                  />
                </Link>
                <Button
                  className="btn btn-outline-light m-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
