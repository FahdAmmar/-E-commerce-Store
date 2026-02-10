import { Card} from "react-bootstrap"

interface Props {
    id?: number
    name: string
    imgUrl: string
    price: number
}

export const StoreItem = ({ name, imgUrl, price }: Props) => {
    const quatity:number = 0
    return (
        <Card  >
            <Card.Img variant="top" src={imgUrl} height="200px" />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{price}</span>
                </Card.Title>
                <Card.Body className="mt-auto">

                    {quatity === 0 ? (
                        <button className="btn btn-primary w-100">Add to Cart</button>

                       ):(
                            <div className=" mb-3 d-flex flex-column align-items-center gap-2">
                                <div className=" d-flex align-items-center justify-content-center gap-2">
                                    <button className="btn btn-outline-primary">+</button>
                                    <span className="mx-2">{quatity} in cart</span>
                                    <button className="btn btn-outline-primary">-</button>
                               </div >
                                <button className="btn btn-danger w-50">Remove</button>

                            </div>
                       ) }

                  
                </Card.Body>
            </Card.Body>
        </Card>
     
    )
}
