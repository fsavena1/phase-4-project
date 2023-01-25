import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function NftDetails({ addReview, user, nfts }) {
    const [nftDetail, setNftDetail] = useState([])
    const [newReview, setNewReview] = useState(false)
    const [body, setBody] = useState('')
    const [reviewError, setReviewError] = useState('')

    const { id } = useParams();

    useEffect(() => {
        fetch(`/nfts/${id}`)
            .then(r => r.json())
            .then(data => setNftDetail(data))
    }, [id])

    function handleNewReview(e) {
        fetch('/reviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                body: body,
                user_id: user.id,
                nft_id: nftDetail.id
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    addReview(data)
                    setNewReview(false)
                })
            } else {
                r.json().then(data => setReviewError(data.error))
            }
        })
    }

    const reviewsCard = nftDetail.reviews?.map(review => {
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

    function handleReviewToggle() {
        setNewReview(!newReview)
      } 

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
                    <Card.Img src={nftDetail?.image} alt={nftDetail?.name} className='text-center' />
                    <Card.Text className='text-center'>{nftDetail?.description}</Card.Text>
                    <Card.Text className='text-center'>Price: {nftDetail?.price} ฿</Card.Text>
                    <Card.Text className='text-center'>{nftDetail?.forSale ? 'Available' : 'Not Available'}</Card.Text>
                </Card>
            </div>
            <div>
                {newReview ?
                    <Form 
                    className='text-center' 
                    style={{width: '60%', margin: '20px auto 0 auto'}}
                    onSubmit={handleNewReview}
                    >
                        <Form.Group className="mb-3" controlId="formBasicReview">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Review"
                                value={body}
                                onChange={e => setBody(e.target.value)}
                            />
                        </Form.Group>
                        <button>Submit</button>
                    </Form>
                    : null}

                <Button 
                style={{marginTop: '10px'}}
                onClick={handleReviewToggle}
                >Add a Review!
                </Button>
                {reviewError &&
                <div>
                    <h1 style={{ margin: '100px auto 0 auto', textAlign: 'center', color: 'red' }}>{reviewError}</h1>
                </div>}
            </div>
            <div>
                {reviewsCard}
            </div>
        </div>

    )
}

export default NftDetails