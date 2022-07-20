import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';
import SearchIcon from './fi_search.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

function ButtonFilter() {

    let nav = useNavigate();
    const url = REACT_APP_API_URL;
    const [loading, setLoading] = useState('')
    const [category, setCategory] = useState([])

    const toHome = async (e) => {
        e.preventDefault();
        nav('/');
    }

    const getCategory = async (e) => {
        setLoading(true)
        try{
          setLoading(true)
          await axios.get(`${url}/api/v1/seller/category/all`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }).then(res => {
            setLoading(false)
            setCategory(res.data.categories)
            // console.log(res.data.categories)
          })
        } catch(err) {
          setLoading(true)
        }
    }

    //  const [slug, setSlug] = useState('')

    const handleSearchCategory = async (e, slug) => {
      // e.preventDefault();
      nav(`/category/${slug}`)
    }

    useEffect(() => {
        toHome();
        getCategory()
        handleSearchCategory()
    }, [])

  return (
    <Container className={styleButton.container}>

      <Button onClick={toHome} className={styleButton.button} type="button">
        <img className='filterLogo d-flex' src={SearchIcon} alt="" />
        <p>Semua</p>
      </Button>

      {
        loading ?
        <p className="text-center fw-bold m-3 mt-5">Loading....</p>
         :
         <>
        </>
      }
      {
        category.map((item, index) => {
          return (
            <>
                <Button onClick={(e) => handleSearchCategory(e, item.slug ) }  className={styleButton.button} type="submit">
                    <img className='filterLogo d-flex' src={SearchIcon} alt="" />
                    <p>{item.name}</p>
              </Button>
          </>
          )
        })
      }
    </Container>
  )
}

export default ButtonFilter