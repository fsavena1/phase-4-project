function NftCard({name, image, description, price, forSale, user}){
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p> {description}</p>
            <p>  ฿ {price}</p>
            <p>{forSale}</p>
            <p>{user}</p>

        </div>
    )
}

export default NftCard