import { Container, Navbar as NavbarBs, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"


const Navbar = () => {
    const {openCart, cartQnty} = ShoppingDataCartContext()
    return (
        <NavbarBs sticky="top">
            <Container className="bg-white shadow-sm mb-3">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {
                    cartQnty > 0 && (
                    <Button className="rounded-circle" variant="outline-primary" style={{width: '3rem', height: '3rem', position: 'relative'}} onClick={openCart}>C
                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                        style={{
                            color: 'white',
                            width: '1.5rem',
                            height: '1.5rem',
                            position: 'absolute',
                            bottom:0,
                            right: 0,
                            transform: 'translate(25%, 25%)'
                        }}>{cartQnty}</div>
                    </Button>
                  )
                }
            </Container>
        </NavbarBs>
    )
}

export default Navbar