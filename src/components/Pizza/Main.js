import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Nav, Container, Navbar,  Col, NavDropdown, Badge} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { FcApproval} from 'react-icons/fc';



export default function Main() {
    return (<>
        <Navbar className='text-white p-0' expand="lg">
            <Container fluid className="nav_bg">
                <Container className='w-75 d-flex justify-content-between p-0'>
                    <Col>
                        <LinkContainer className='p-0  text-white f-logo' to="/">
                            <Navbar.Brand >Pizza Hut<FcApproval /></Navbar.Brand>
                        </LinkContainer>
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <LinkContainer className='text-white p-3 f-b' to='/'>
                            <NavDropdown title="Termékek" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Pizzák</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Egzotikus ízek</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Pikáns ízek</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Minden termék</NavDropdown.Item>
                            </NavDropdown>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/user">
                                <Nav.Link>Kilépés</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/signup">
                                <Nav.Link>Regisztráció</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/shop">
                                <Nav.Link >
                                    <i className=" bi bi-cart-plus"></i> <Badge bg="secondary" 
                                    className="offset-top-minus">{}</Badge>
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
  </> )
}