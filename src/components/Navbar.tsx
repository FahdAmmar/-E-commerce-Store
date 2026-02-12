import { Container, Navbar as NavBs, Nav } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "../context/ShoppingCardContext";

function Navbar() {
    const location = useLocation()
    const { cartItemsQuantity ,openCart} = useShoppingCart();
    const getNavLinkStyle = (path: string) => {
        const isActive = location.pathname === path
        return {
            color: isActive ? '#007bff' : '#333',
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            padding: isActive? '5px':'10px'
        } as React.CSSProperties
    }

    return (
        <NavBs className="bg-white shadow-sm mb-3">
            <Container>
                    <Nav>
                    <Nav.Link to="/" as={NavLink} style={getNavLinkStyle('/')}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink} style={getNavLinkStyle('/about')}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink} style={getNavLinkStyle('/store')}>
                        Store
                    </Nav.Link>
                </Nav>
                <button onClick={openCart} type="button" className="btn btn-outline-primary position-relative">
                    <FaCartShopping size={20} />
                    <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItemsQuantity}
                    </span>
                </button>
              
            </Container>
        </NavBs>        
    )
}

export default Navbar