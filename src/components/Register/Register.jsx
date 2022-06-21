import React from 'react';
import Image from './Subtract.svg';
import styleRegister from './register.module.css';
import { Form, Button} from 'react-bootstrap';

function Register() {
  return (
    <div className={styleRegister.container}>
      <img src={Image} alt="img" className={styleRegister.img} />
      <div className={styleRegister.formContainer}>
        <h1 className={styleRegister.header}><strong>Register To Second Hand</strong></h1>
        <Form className={styleRegister.formStyle}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control className={styleRegister.rounded} type="text" placeholder="  Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className={styleRegister.rounded} type="email" placeholder="  ex:johndee@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className={styleRegister.rounded} type="password" placeholder="  min 6 characters" />
          </Form.Group>

          <Button className={styleRegister.styleButton} variant="primary" type="submit">
            Register
          </Button>
        </Form>

      </div>
    </div>
  )
}

export default Register