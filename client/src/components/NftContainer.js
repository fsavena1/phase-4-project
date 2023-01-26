import React from "react";
import NftCard from "./NftCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function NftContainer({ nfts, loading, user }) {

  const nftList = nfts.map((nft) => {
    return (
      <NftCard
        key={nft.id}
        name={nft.name}
        image={nft.image}
        description={nft.description}
        price={nft.price}
        forSale={nft.for_sale}
        user={nft.user.user_name}
        id={nft.id}
      />
    );
  });

  if (loading) return <h1>Loading</h1>
  
  return (
    <div style={{
      marginTop: '80px',
      marginBottom: '50px',
      width: '100%',
    }}>
      {user ? <h1 className='text-center'>Welcome {user.first_name}!</h1> : null}
      <Container style={{
      }}>
        <Row xs={4}>
          {nftList}
        </Row>
      </Container>
    </div>
  );
}

export default NftContainer;
