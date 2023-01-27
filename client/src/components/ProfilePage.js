import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useState } from "react";

function ProfilePage({ user, loading }) {
  const [imgSrc, setImgSrc] = useState(user.avatar);
  const [defaultSrc, setDefaultSrc] = useState("https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg")

  const userNfts = user.nfts?.map((nft) => {
    return (
      <Card className="text-center" style={{ padding: "10px", border: "2px solid black" }}>
        <Card.Title>{nft.name}</Card.Title>
        <Card.Img src={nft.image}></Card.Img>
        <Card.Text>{nft.description}</Card.Text>
        <Card.Text>{nft.price} ฿</Card.Text>
      </Card>
    );
  });

  const nftOwned = user.nfts.length;

  return (
    <div
      style={{
        margin: "100px auto 0 auto",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img
              src="https://i.imgur.com/Qtrsrk5.jpg"
              className="img-fluid"
              alt="ok"
            />
          </div>
          <div className="user text-center">
            <div className="profile">
              <img
                src={ imgSrc ? imgSrc : defaultSrc}
               
                className="rounded-circle"
                width="120"
                alt="ok"
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h4 className="mb-0">
              {user.first_name} {user.last_name}
            </h4>
            <span className="text-muted d-block mb-2">{user.user_name}</span>
            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">NFTs Owned</h6>
                <span>{nftOwned}</span>
              </div>
              <div className="stats"></div>
              <div className="stats">
                <h6 className="mb-0">Reviews</h6>
                <span>{user.reviews.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center">My NFTS</h1>
      </div>
      <div>
        <Container style={{ gap: "5px" }}>
          <Row sm={2}>{userNfts}</Row>
        </Container>
      </div>
    </div>
  );
}

export default ProfilePage;
