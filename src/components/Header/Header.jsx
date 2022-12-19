import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/logotipo.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" dark expand="md">
                <NavbarBrand href="/">
                    <img 
                        src={Logo}
                        alt='Afro PE'
                        style={{
                            height: 60,
                            width: 60
                        }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-text" navbar>
                        <NavItem>
                            <NavLink><Link to="/" className="links">Início</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/sobre" className="links">Sobre nós</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/contato" className="links">Contato</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/login" className="links">Login</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Header;