import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function NftDetails({ addReview, user, nfts }) {
    const [nftDetail, setNftDetail] = useState([])
    const [newReview, setNewReview] = useState(false)
    const [body, setBody] = useState('')
    const [reviewError, setReviewError] = useState('')

    const { id } = useParams();
    // const nav = useNavigate();

    useEffect(() => {
        fetch(`/nfts/${id}`)
            .then(r => r.json())
            .then(data => setNftDetail(data))
    }, [id])

    function handleNewReview(e) {
        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
                <h1>{review.user.user_name}</h1>
                <p>{review.body.replace('[','').replace(']','').replace('"','').replace('"', '')}</p>
            </Card>
        )
    })

    console.log(nftDetail.for_sale)

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
                    <Card.Text className='text-center'>{nftDetail.for_sale ? 'Available' : 'Not Available'}</Card.Text>
                    {user ? 
                        <Button href={`/nft/${id}/edit`}>
                        Edit
                        </Button>
                        : null}
                </Card>
            </div>
            <div>
                {newReview ?
                    <Form
                        className='text-center'
                        style={{ width: '60%', margin: '20px auto 0 auto' }}
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

                    { user ?  <Button
                    style={{ marginTop: '10px' }}
                    onClick={handleReviewToggle}
                >Add a Review!
                </Button>: null  }

               
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