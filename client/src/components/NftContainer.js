import React from "react";
import NftCard from "./NftCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function NftContainer({ nfts }) {
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

  return (
    <Container>
      <Row xs={4}>
        {nftList}
      </Row>
    </Container>
  );
}

export default NftContainer;
