import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function NftDetails() {
    const [nftDetail, setNftDetail] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`/nfts/${id}`)
        .then(r => r.json())
        .then(data => setNftDetail(data))
    }, [id])

    console.log(nftDetail.user_name)

    return (
        <Card>
            <Card.Title>{nftDetail.user_name}</Card.Title>
            <Card.Title>{nftDetail.name}</Card.Title>
            <Card.Img src={nftDetail.image} alt={nftDetail.name} />
            <Card.Text>{nftDetail.description}</Card.Text>
            <Card.Text>฿ {nftDetail.price}</Card.Text>
            <Card.Text>{nftDetail.forSale ? 'Available' : 'Not Available'}</Card.Text>
        </Card>

    )
}

export default NftDetails