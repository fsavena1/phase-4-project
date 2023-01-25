import { Container, Row, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";



function ProfilePage({ user, loading }) {

    console.log(user.nfts)

    const userNfts = user.nfts?.map((nft) => {
        return (
                <Card className='text-center' style={{padding: '10px', margin: '0px'}}>
                    <Card.Title>{nft.name}</Card.Title>
                    <Card.Img src={nft.image}></Card.Img>
                    <Card.Text>{nft.description}</Card.Text>
                    <Card.Text>{nft.price} ฿</Card.Text>
                </Card>
        )
    })

    const nftOwned = user.nfts.length
    console.log(nftOwned)


    return (
        <div style={{
            margin: '100px auto 0 auto',
        }}>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="card">
                    <div class="upper">
                        <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" alt='ok' />
                    </div>
                    <div class="user text-center">
                        <div class="profile">
                            <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80" alt='ok' />
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <h4 class="mb-0">{user.first_name} {user.last_name}</h4>
                        <span class="text-muted d-block mb-2">{user.user_name}</span>
                        <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div class="stats">
                                <h6 class="mb-0">NFTs Owned</h6>
                                <span>{nftOwned}</span>
                            </div>
                            <div class="stats">

                            </div>
                            <div class="stats">
                                <h6 class="mb-0">Reviews</h6>
                                <span>{user.reviews.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class='text-center'>My NFTS</h1>
            </div>
            <div>
                <Container style={{gap: '5px'}}>
                    <Row sm={2}>
                    {userNfts}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProfilePage