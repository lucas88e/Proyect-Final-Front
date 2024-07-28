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
  const { isLoginPage, toggleAuth } = useAuth();

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
        <Navbar.Brand className="px-5" href="/">
          Bazar Subastas Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">
              Productos
            </Nav.Link>

            <NavDropdown
              title="Categorías"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="/ropa">
                Ropa
              </NavDropdown.Item>
              <NavDropdown.Item href="/electronica">
                Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item href="/hogar">
                Hogar
              </NavDropdown.Item>
              <NavDropdown.Item href="/mascotas">
                Mascotas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categorias">
                Todas las Categorías
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isLoginPage ? (
              <Link to="/cart">
                <IconButton
                  edge="end"
                  color="inherit"
                >
                  <ShoppingCartIcon className="m-2" />
                </IconButton>
              </Link>
            ) : (
              ""
            )}
            {isLoginPage ? (
              <Link to="/perfil">
                <Avatar
                  className="m-2"
                  sx={{
                    bgcolor: deepPurple[500],
                  }}
                  alt={user.username}
                  src="/broken-image.jpg"
                />
              </Link>
            ) : (
              ""
            )}
            {isLoginPage ? (
              <Button
                className="btn btn-outline-light m-2"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Nav.Link href="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
