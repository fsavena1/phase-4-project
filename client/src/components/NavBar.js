
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {

    return (
        <Navbar variant='dark' bg='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='/'>NFT FINDER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="">Profile</Nav.Link>
                    <Nav.Link href="">Create Listing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar