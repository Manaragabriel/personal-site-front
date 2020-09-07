import React, { useState,useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default function header(){
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

   
    

    return (
        <header>

            <Navbar color="dark" light fixed={ 'top'} expand="md">
                <NavbarBrand href="/">GABRIEL MANARA</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#about">Sobre mim</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#portifolio">Portifólio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#conhecimentos">Conhecimentos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">Contato</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#blog">Blog</NavLink>
                    </NavItem>
                
                </Nav>
                
                </Collapse>
            </Navbar>
        </header>
    )
}