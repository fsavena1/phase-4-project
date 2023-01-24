import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateListing({ user, handleNftListing }) {
    // const [currentUser, setCurrentUser] = useState(user)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [forSale, setForSale] = useState(false)
    const [newNftError, setNewNftError] = useState('')

    const nav = useNavigate

    function handleListing(e) {
        e.preventDefault();
        fetch('/nfts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                image: image,
                description: desc,
                price: price,
                for_sale: forSale,
                user_id: user.id
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    nav('/')
                    handleNftListing(data)
                })
            } else {
                r.json().then(data => {
                    setNewNftError(data.error)
                })
            }
        })
    }

    return (
        <div style={{ margin: '100px', width: '80%' }}>
            <Form onSubmit={handleListing}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter NFT Name..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Image Link..."
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description..."
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Price..."
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        label="For Sale"
                        type="checkbox"
                        value={forSale}
                        onChange={e => setForSale(e.target.checked)}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Create Listing
                </Button>
            </Form>
            {newNftError &&
                <div>
                    <h1 style={{ margin: '100px auto 0 auto', textAlign: 'center', color: 'red' }}>{newNftError}</h1>
                </div>}
        </div>
    )
}

export default CreateListing