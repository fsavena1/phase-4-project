import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function NftDetails() {
    const [nftDetail, setNftDetail] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/nfts/${id}`)
        .then(r => r.json())
        .then(data => setNftDetail(data))
    }, [id])
    
    console.log(nftDetail)


    const reviews = nftDetail.reviews?.map(review => {
        return (
        <Card style={{
            margin: '10px auto 0 auto',
            width: '70%',
            padding: '10px'
        }}>
            <h1>User {review.user_id}</h1>
            <p>{review.body}</p>
        </Card>
        )
    })

    return (
        <div className='text-center'
        style={{
            marginBottom: '20px',
        }}
        >
            <div style={{
                margin: '80px auto 0 auto',
                display: 'flex',
                justifyContent: 'center',
            }}
            >
                {/* <div>
                {nameArr}
                </div> */}
                <Card style={{
                    padding: '20px'
                }}>
                    <Card.Title className='text-center'> Owner: {nftDetail.user?.user_name}</Card.Title>
                    <Card.Title className='text-center'>{nftDetail?.name}</Card.Title>
                    <Card.Img src={nftDetail?.image} alt={nftDetail?.name} className='text-center'/>
                    <Card.Text className='text-center'>{nftDetail?.description}</Card.Text>
                    <Card.Text className='text-center'>Price: {nftDetail?.price} ฿</Card.Text>
                    <Card.Text className='text-center'>{nftDetail?.forSale ? 'Available' : 'Not Available'}</Card.Text>
                </Card>
            </div>
            <div>
                <Button style={{
                    marginTop: '10px',
                }}
                >Add a Review!
                </Button>
            </div>
            <div>
                {reviews}
            </div>
        </div>

    )
}

export default NftDetails