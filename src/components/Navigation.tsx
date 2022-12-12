// import {Button, Container, Nav, Navbar as NavbarBs, NavDropdown} from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import Form from 'react-bootstrap/Form';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// // import { useShoppingCart } from '../context/ShoppingCartContext'

// export function Navbar(){
//     // const { openCart, cartQuantity } = useShoppingCart();
//     return(
//         <NavbarBs sticky='top' className="bg-white shadow-sm mb-3">
//             <Container>
//                 {['lg'].map((expand) => (
//                     <Nav key={expand} bg="light" expand={expand} className="mb-3">
//                     <Container fluid>
//                         <NavbarBs.Brand href="#">Navbar Offcanvas</NavbarBs.Brand>
//                         <NavbarBs.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <NavbarBs.Offcanvas
//                         id={`offcanvasNavbar-expand-${expand}`}
//                         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                         placement="end"
//                         >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                             Offcanvas
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav className="justify-content-end flex-grow-1 pe-3">
//                             <Nav.Link href="#action1">Home</Nav.Link>
//                             <Nav.Link href="#action2">Link</Nav.Link>
//                             <NavDropdown
//                                 title="Dropdown"
//                                 id={`offcanvasNavbarDropdown-expand-${expand}`}
//                             >
//                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action4">
//                                 Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action5">
//                                 Something else here
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                             </Nav>
//                             <Form className="d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                             />
//                             <Button variant="outline-success">Search</Button>
//                             </Form>
//                         </Offcanvas.Body>
//                         </NavbarBs.Offcanvas>
//                     </Container>
//                     </Nav>
//                 ))}
//                 {/* <Nav className='me-auto'>
                    // <Nav.Link to="/" as={NavLink}>About Us</Nav.Link>
                    // <Nav.Link to="/store" as={NavLink}>Inspection Services</Nav.Link>
                    // <NavDropdown title={"Primary Products"}>
                    //     <Nav.Link className='me-auto' to="/Primaryproduct01" as={NavLink}>
                    //         Forge Bar(Round/Square)
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct02" as={NavLink}>
                    //         Hot Rolled Round Bar
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct03" as={NavLink}>
                    //         Wire Rod
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct04" as={NavLink}>
                    //         Hot Rolled Coil / Sheet / Plate
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct05" as={NavLink}>
                    //         Cold Rolled Coil / Sheet
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct06" as={NavLink}>
                    //         GI、GL、GA Coil / Sheet
                    //     </Nav.Link>
                    //     <Nav.Link to="/Primaryproduct07" as={NavLink}>
                    //         PPGI、PPGL Coil / Sheet
                    //     </Nav.Link>
                    // </NavDropdown>
                    // <NavDropdown title={"Secondary Product"}>
                    //     <Nav.Link>
                            
                    //     </Nav.Link>
                    // </NavDropdown>
                    // <Nav.Link to="/about" as={NavLink}>Contact Us</Nav.Link>
//                 </Nav> */}
               
//                 {/* <Button 
//                 onClick={openCart}
//                 style={{ width:"3rem", height:"3rem", position:"relative" }} 
//                 variant='outline-primary'
//                 className="rounded-circle"
//                 >
//                 <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/>
//                 </svg>
//                 {cartQuantity > 0 && (
//                 <div 
//                 className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
//                 style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:0, right:0, transform:"translate(25%,25%)"}}
//                 >
//                          {cartQuantity}
//                 </div>
//                 )}
//                 </Button> */}
//             </Container>
//         </NavbarBs>
//     )
// }

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'
import '../assets/css/Navigation.css'

export function Navigation() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar collapseOnSelect={true} key={expand} expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Brand to="/" as={NavLink} href="/">K Glogy Industrial Corportion Limited</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                K Glogy Industrial Corportion Limited
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='navlink' to="/about" href="/about" as={NavLink}>About Us</Nav.Link>
                    <Nav.Link className='navlink' to="/InspectionServices" href="/store" as={NavLink}>Inspection Services</Nav.Link>
                    <NavDropdown className='navlink' title={"Primary Products"}>
                        <Nav.Link className='navlink' to="/Primaryproduct01" href="/Primaryproduct01" as={NavLink}>
                            Forge Bar(Round/Square)
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct02" href="/Primaryproduct02" as={NavLink}>
                            Hot Rolled Round Bar
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct03" href="/Primaryproduct03" as={NavLink}>
                            Wire Rod
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct04" href="/Primaryproduct04" as={NavLink}>
                            Hot Rolled Coil / Sheet / Plate
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct05" href="/Primaryproduct05" as={NavLink}>
                            Cold Rolled Coil / Sheet
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct06" href="/Primaryproduct06" as={NavLink}>
                            GI、GL、GA Coil / Sheet
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Primaryproduct07" href="/Primaryproduct07" as={NavLink}>
                            PPGI、PPGL Coil / Sheet
                        </Nav.Link>
                    </NavDropdown>

                    <NavDropdown className='navlink' title={"Secondary Product"}>
                        <Nav.Link className='navlink' to="/Secondaryproduct01" href="/Secondaryproduct01" as={NavLink}>
                            Hot Rolled Coil / Sheet
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Secondaryproduct02" href="/Secondaryproduct02" as={NavLink}>
                            Cold Rolled Coil / Sheet
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Secondaryproduct03" href="/Secondaryproduct03" as={NavLink}>
                            (B grade) GI、GL Coil / Sheet
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/Secondaryproduct04" href="/Secondaryproduct04" as={NavLink}>
                            (D grade) GI、GL Coil / Sheet
                        </Nav.Link>
                    </NavDropdown>
                    <Nav.Link className='navlink' to="/contact" href="/contact" as={NavLink}>Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
