import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext";
import CartItems from "./CartItems"
import items from "../data/items.json"
type ShoppingCartProps={
    isOpen:boolean

}

export const ShoppingCart=({isOpen}:ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}> 
                    {cartItems?.map(items=>(
                        <CartItems key={items.id} {...items}/>
                    ))}

                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
     
    )
}