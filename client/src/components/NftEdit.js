import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NftEdit({ handleUpdatedNft, deleteNft }) {
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editForSale, setEditForSale] = useState(true);
  const [editError, setEditError] = useState("");

  const { id } = useParams();
  const nav = useNavigate();

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/nfts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: editName,
        description: editDesc,
        price: editPrice,
        for_sale: editForSale,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          handleUpdatedNft(data);
          nav(`/nft/${id}`);
        });
      } else {
        r.json().then(data => {
            setEditError(Object.entries((data.errors)))
        })
      }
    });
  }

  function handleNftDelete() {
    fetch(`/nfts/${id}`, {
      method: "DELETE",
    });
    deleteNft(id);
    nav("/user/:id");
  }

  return (
    <div style={{ margin: "100px", width: "80%" }}>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new name..."
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="firstName"
            placeholder="Enter new description..."
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter new price..."
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            label="For Sale"
            type="checkbox"
            value={editForSale}
            onChange={(e) => setEditForSale(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button onClick={handleNftDelete}>Delete</Button>
      </Form>
      {editError ? (editError.map(e => <div><h1 style={{ textAlign: 'center', color: 'red' }}>{e[1]}</h1></div>)
            ) : null}
    </div>
  );
}

export default NftEdit;
