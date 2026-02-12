import { Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext"; // تأكد من اسم الملف الصحيح!

interface Props {
    id: number;
    name: string;
    imgUrl: string;
    price: number;
}

export const StoreItem = ({ id, name, imgUrl, price }: Props) => {
    const context = useShoppingCart();

    const getItemQuantity = context.getItemQuantity || (() => 0);
    const increaseItem = context.increaseItem || (() => { });
    const decreaseItem = context.decreaseItem || (() => { });
    const removeItem = context.removeItem || (() => { });

    const quantity = getItemQuantity(id);     

    return (
        <Card className="h-100"> 
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-5 fw-bold">{name}</span> 
                    <span className="text-muted">${price.toFixed(2)}</span> 
                </Card.Title>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button
                            onClick={() => increaseItem(id)}
                            className="btn btn-primary w-100"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="d-flex flex-column align-items-center gap-2">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <button
                                    onClick={() => decreaseItem(id)}
                                    className="btn btn-outline-secondary"
                                    disabled={quantity <= 1} 
                                >
                                    -
                                </button>
                                <span className="fs-5 fw-bold">{quantity}</span>
                                <button
                                    onClick={() => increaseItem(id)}
                                    className="btn btn-outline-secondary"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeItem(id)}
                                className="btn btn-sm btn-outline-danger"
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};