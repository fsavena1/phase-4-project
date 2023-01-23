import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom"

function NftCard({ name, image, description, price, forSale, user, id }) {
    let navigate = useNavigate()
    return (
        <Col>
            <Card key={id}>
                <Card.Title>{name}</Card.Title>
                <Card.Img 
                src={image} 
                alt={name} 
                onClick={() => navigate(`/nft/${id}`)}
                />
                <Card.Text>{description}</Card.Text>
                <Card.Text>฿ {price}</Card.Text>
                <Card.Text>{forSale}</Card.Text>
                <Card.Text>{user}</Card.Text>
                <Button >
                    Buy
                </Button>
            </Card>
        </Col>
    )
}

export default NftCard