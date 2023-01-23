import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom"

function NftCard({ name, image, description, price, forSale, user, id }) {
    let navigate = useNavigate()
    return (
        <Col style={{
            marginTop: '10px',
        }}>
            <Card key={id} style={{
                    padding: '20px'
                }}>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Img 
                src={image} 
                alt={name} 
                onClick={() => navigate(`/nft/${id}`)}
                />
                <Card.Text className='text-center text-truncate'>{description}</Card.Text>
                <Card.Text className='text-center'>{price} ฿</Card.Text>
                <Card.Text className='text-center'>{forSale}</Card.Text>
                <Card.Text className='text-center'>Owner: {user}</Card.Text>
                {forSale ? <Button>Buy</Button> : <p className='text-center'>Not For Sale</p>}
            </Card>
        </Col>
    )
}

export default NftCard