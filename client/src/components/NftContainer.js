import React from "react";
import NftCard from "./NftCard";

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
      />
    );
  });

  return (
    <div>
      <h1>{nftList}</h1>
    </div>
  );
}

export default NftContainer;
