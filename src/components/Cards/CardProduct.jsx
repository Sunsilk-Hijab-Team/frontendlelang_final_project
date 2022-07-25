import { Card, Container, Row } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import NoImage from '../../images/no_image.png'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { Rupiah } from '../CostumFunction/Rupiah';
import { MdFavorite } from 'react-icons/md';
import jwt from 'jwt-decode'
const { REACT_APP_API_URL } = process.env

function CardComponent() {

    const token = localStorage.getItem('token');
    const decode = jwt(token);
    const url = `${REACT_APP_API_URL}/api/v1/product/all`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fLoad, setFLoad] = useState(false);
    const [tLoad, setTload] = useState(false);
    const [uLoad, setULoad] = useState(false);
    const [favorites, setFavorites] = useState([])

    const getProducts = async () => {

        setLoading(true)

        try {
            //  console.log(items, 'items--sebelum');
            await axios.get(url)
            .then(res => {
                // console.log(res, 'prd')
                setLoading(false)
                // console.log(res.data, 'data')
                if (res.status === 204) {
                    setItems([]);
                }
                else {
                    setLoading(false)
                    setItems(res.data.data.product)
                    console.log(res.data.data.product)
                }
                // setItems(res.data.product.product)
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false)
            })
        } catch (error) {
            //  setLoading(true);
            console.log(error.message);
        }

    }

    const getFavorite = async () => {
        setFLoad(true)
        try{
            await axios.get(`${REACT_APP_API_URL}/api/v1/product/favorite/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setFLoad(false)
                console.log(res.data.Favorites, 'favorite')
                setFavorites(res.data.Favorites)
            })
        } catch(error){
            // console.log(error.message)
        }
    }

    const setToFavorite = async (e, pId, sId) => {
        e.preventDefault();
        setTload(true)
        try {
            await axios({
                    method: 'POST',
                    url: `${REACT_APP_API_URL}/api/v1/product/favorite/add`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        product_id: pId,
                        seller_id: sId
                    }
                })
                .then(res => {
                    if(res.status === 201){
                        setTload(false)
                        getFavorite()
                    }
                })
        } catch (error) {

        }
    }

    const setToUnFavorite = async (e, id) => {
        e.preventDefault();
        setULoad(true)
        try {
            axios.delete(`${REACT_APP_API_URL}/api/v1/product/favorite/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setTload(false)
                getFavorite()
                console.log(res, 'delete')
            })
        } catch(error){

        }
    }

    // console.log(items, 'items--setelah');

    useEffect(() => {
        getProducts();
        getFavorite();
    }, []);

    return (
        <Container className={styleCard.container} md>
            <Row lg={6} md={4} sm={3} xs={2}>
             {
                loading ?
                <Row className='d-flex justify-content-center'>
                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>

                : <></>
            }
            {items.length>0 ?

                items.map((item, index) => {
                    // console.log(item, '--map');
                   return (
                        <div key={index} className={styleCard.cardBody}>
                            <Link to={'/detail/'+item.id}>
                                <Card className={styleCard.cardStyle}>
                                    <Card.Img variant="top" src={ item.images.length === 0  ? NoImage : item.images[0].image_url } className={styleCard.imgThumbnail} />

                                    {/* {



                                        favorites.map((favorite, index) => {

                                            if(favorite.id_product == item.id){

                                                return(

                                                <button className="btn btn-tranparent" onClick={ e => setToUnFavorite(e, favorite.id)} type="button">
                                                            <MdFavorite key={index} style={ {
                                                                size: '24px',
                                                                color: 'red'
                                                                } } />
                                                </button>
                                                )
                                            } else if(favorite.id_product !== item.id){

                                                return (
                                                      <button className="btn btn-tranparent" onClick={ e => setToFavorite(e, item.id, item.user_id)} type="button">
                                                            <MdFavorite key={index} />
                                                     </button>

                                                )
                                            }

                                        }) */}

                                        // :

                                        //     <button className="btn btn-tranparent" onClick={ e => setToFavorite(e, item.id, item.user_id)} type="button">
                                        //         <MdFavorite key={index} />
                                        //     </button>


                                    // }
                                    <Card.Body>
                                        <Card.Title> <strong>{item.name}</strong> </Card.Title>
                                        <Card.Text className={styleCard.styleCardText} >
                                            { item.categories == null ? 'Tidak Berkategori' : item.categories.name }
                                        </Card.Text>
                                        <Card.Title>{Rupiah(item.base_price)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>

                    );
                })
                : <h5 className="justify-content-center w-100 mt-4">Opps... Belum ada product yang dijual nih...</h5>
            }
            </Row>

        </Container>
    );
}

export default CardComponent;