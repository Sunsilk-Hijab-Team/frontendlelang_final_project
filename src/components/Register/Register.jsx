import React from 'react';
import Image from './Subtract.svg';
import styleRegister from './register.module.css';
import { Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const { REACT_APP_API_URL } = process.env;

function Register() {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />)

  const handelToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };

  const nav = useNavigate();
  const url = `${REACT_APP_API_URL}/api/v1/auth/register`;

  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault();
      setLoading(true)
      try{

        await axios.post(url, { full_name, email, password })
        .then( res => {
          // console.log(res.data);
          localStorage.setItem('token', res.data.token);
          setLoading(false)
          nav('/');
        })
        .catch(error => {
          setLoading(false)
          // console.log(error.response.data.message);
          toast.error(error.response.data.message, {
              theme: 'colored',
              position: toast.POSITION.TOP_RIGHT
          });
        })

      } catch (error) {
        setLoading(false)
           return error.message;
      }

  }

  return (
    <div className={styleRegister.container}>
      <img src={Image} alt="img" className={styleRegister.img} />
      <div className={styleRegister.formContainer}>
        <h1 className={styleRegister.header}>Register To Second Hand</h1>
        <Form onSubmit={handleRegister} className={styleRegister.formStyle}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control className={styleRegister.rounded} type="text" placeholder="Name" onChange={(e) => setFullName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className={styleRegister.rounded} type="email" placeholder="ex:johndee@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <span className="icons-span" onClick={handelToggle}>
              {passwordIcon}
            </span>
            <Form.Control className={styleRegister.rounded} placeholder="min 8 characters" type={passwordType} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          {

            loading ?

            <Button className={styleRegister.styleButton} disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>

            :

          <Button className={styleRegister.styleButton} type="submit">
            Register
          </Button>

          }

        </Form>

      </div>
    </div>
  )
}

export default Register