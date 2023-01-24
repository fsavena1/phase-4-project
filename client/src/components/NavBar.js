
import { Dropdown } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar({nfts, user}) {

   

    // console.log(user)


    return (
        <Navbar variant='dark' bg='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='/nfts'>NFT MARKET PLACE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/nfts">Home</Nav.Link>
                    <Nav.Link href="/nfts">NFTs</Nav.Link>
                    <Nav.Link href="">Create Listing</Nav.Link>
                    <NavDropdown title='My Profile' id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">View my Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">
                           Sign up 
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        {user ? <NavDropdown.Item href="/">Logout</NavDropdown.Item> : 
                        <NavDropdown.Item href="/">Login</NavDropdown.Item>}
                        {/* <NavDropdown.Item href="#action/3.4">
                            {user ? 'Logout' : 'Login'}
                        </NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar