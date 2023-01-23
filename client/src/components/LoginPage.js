import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    return (
        <div style={{margin: '100px', width: '80%'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage