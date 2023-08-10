import { Container, Navbar as NavbarBs, Nav, Button} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { ShoppingDataCartContext } from "../context/ShopingCartContext"
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
    const {openCart, cartQnty} = ShoppingDataCartContext()
    return (
        <NavbarBs sticky="top" className="pe-2 bg-black text-muted shadow-sm  " >
            <Container >
                <Nav className="me-auto ">
                    <Nav.Link to="/" as={NavLink} className="text-white">Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink} className="text-white">Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink} className="text-white">About</Nav.Link>
                </Nav>
                <Link to="/" className="me-4 font-12 text-white text-decoration-none">
                    <div className="nav-line-1-container"><span id="nav-link-accountList-nav-line-1" className="nav-line-1 nav-progressive-content">Hello, sign in</span></div>
                    <span className="nav-line-2 ">Account &amp; Lists<span className="nav-icon nav-arrow" style={{"visibility": "visible"}}></span></span>
                </Link>
                <Link to="/" className="me-4 font-12 text-white text-decoration-none">
                    <span className="nav-line-1">Returns</span>
                    <span className="nav-line-2">&amp; Orders<span className="nav-icon nav-arrow"></span></span>
                </Link>
                <Button className="rounded-circle p-0" variant="" style={{position: 'relative'}} onClick={openCart}><IoCartOutline c style={{width: '2.5rem', height: '2.5rem', position: 'relative', color: 'white'}}/>

                    {
                        cartQnty > 0 && (
                            <div className="bg-black fw-bold   d-flex justify-content-center align-items-center" 
                            style={{
                                color: 'white',
                                width: '1.2rem',
                                height: '1.2rem',
                                position: 'absolute',
                                top: '-6px',
                                right: '0px',
                                left: '8px',
                                transform: 'translate(25%, 25%)'
                            }}>{cartQnty}</div>
                    )
                    }
                </Button>

            </Container>
        </NavbarBs>
    )
}

export default Navbar