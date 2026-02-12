import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext";

type ShoppingCartProps={
    isOpen:boolean
}

export const ShoppingCart=({isOpen}:ShoppingCartProps) => {
    const {closeCart} = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Cart Items
            </Offcanvas.Body>
        </Offcanvas>
     
    )
}