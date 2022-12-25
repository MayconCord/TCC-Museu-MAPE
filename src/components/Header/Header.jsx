import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/logotipo.png';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" expand="md">
                <Container>
                    <Navbar.Brand> 
                        <Link to="/"><img src={Logo} alt='Afro PE' style={{height: 70, width: 70}} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className="links">Início</Link></Nav.Link>
                        <Nav.Link><Link to="/sobre" className="links">Sobre nós</Link></Nav.Link>
                        <Nav.Link><Link to="/contato" className="links">Contato</Link></Nav.Link>
                        <Nav.Link id="login-link"><Link to="/login" className="links">Login</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;