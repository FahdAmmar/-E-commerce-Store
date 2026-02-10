import { Container,Col,Row } from "react-bootstrap"
import items from "../data/items.json"
import {StoreItem}  from "../components/StoreItem"

export const Store = () => {
    return (
        <Container>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {items.map(item => ( 
                    <Col key={item.id}>
                        <StoreItem
                            id={item.id}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            price={Number(item.price)}
                        />


                    </Col>
                ))}
            </Row>

        </Container>
    )
}
