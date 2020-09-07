import React, { useState } from 'react';
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
        <footer id="footer" class="d-flex justify-content-center align-items-center">
            <p class="text-white">Contato: <a class="text-white" href="mailto:gabrielmanara2010@hotmail.com">gabrielmanara2010@hotmail.com</a></p>
           
        </footer>
    )
}