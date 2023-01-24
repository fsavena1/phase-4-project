import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    const [loginUser, setLoginUser] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/login`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            user_name: loginUser, 
            password: loginPassword
        })
        })
        .then(r=>r.json())
        .then(data => console.log(data))
     }
    

    return (
        <div style={{margin: '100px', width: '80%'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                         placeholder="Enter username..."
                         value={loginUser}
                         onChange={e => setLoginUser(e.target.value)}

                       />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={e => setLoginPassword(e.target.value)}
                       />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage