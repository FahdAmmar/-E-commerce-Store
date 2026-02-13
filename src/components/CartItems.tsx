import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"
import  items  from "../data/items.json"
import { Button } from "react-bootstrap"
import { IoIosClose } from "react-icons/io";

type CartItemsProps={
    id:number,
    quantity:number,
}


const CartItems=({id,quantity}:CartItemsProps)=>{
    const { removeItem }=useShoppingCart()
    const item=items.find(i=> i.id ===id)
    if(item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">

            <img src={item.imgUrl} style={{
                width:'125px',height:'75px',
                objectFit:"cover"
            }}/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity>1 && <span className="text-muted">x{quantity}</span>}
                </div>
                <div className="text-muted">
                   x{item.price}
                </div>
            </div>
            <div>
                ${item.price*quantity}
            </div>
            <Button variant="outline-danger" size="sm" 
                onClick={() => removeItem(item.id)}><IoIosClose/>
            </Button>
        </Stack>
    )



}
export default CartItems