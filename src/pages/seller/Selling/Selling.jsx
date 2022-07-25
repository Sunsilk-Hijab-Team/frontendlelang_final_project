import react from 'react';

// import NavbarafterLogin command
import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import DashboardMenu from '../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import {Rupiah} from '../../../components/CostumFunction/Rupiah';
import styleSelling from './Selling.module.css';
import moment from 'moment';
import MatchModal from '../../../components/MatchModal/MatchModal';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';


const { REACT_APP_API_URL } = process.env;

function Selling(){
    const url = `${REACT_APP_API_URL}`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const token = localStorage.getItem('token');
    let nav = useNavigate();

    const getSellings= async () => {
        setLoading(true);
        try{
            await axios.get(`${url}/api/v1/seller/order/all`,{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                setItems(res.data.Orders)
                setLoading(false)
                // console.log(res.data.Orders, 'or')
                // console.log("res ordersss ###"+res.data.Orders);
            })
        }catch(error){
              setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getSellings();
    })

    const handleDecline= async (e, id) => {
        e.preventDefault();
        try{
            // console.log("token", token);
            // console.log("id", `${id}`);
            await axios({
                method: "PUT",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                url: `${url}/api/v1/seller/order/update/${id}`,
                data: {
                    status: "rejected"
                },
            })
            .then(res => {
                if(res.data.status === 'success'){
                    // getSellings();
                    console.log("oiiii berhasil kesinii")
                    nav('/seller/dashboard/selling')
                    toast.success('Order berhasil ditolak', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            })
        }catch(error){
            console.log(error);
        }
    }
    // console.log("itemsss product"+items)
    const handleAccepted= async (e, idOrder, idProduct) => {
        e.preventDefault();
        try{
            // console.log("token", token);
            // console.log("id", `${id}`);
            await axios({
                method: "PUT",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                url: `${url}/api/v1/seller/order/update/${idOrder}`,
                data: {
                    status: "accepted"
                },
            })
            .then(res => {
                // if success open modal matchmodal
                if(res.data.status === 'success'){
                    // console.log("oiiii berhasil kesinii")
                    // update product status to sold
                    nav('/seller/dashboard/selling')
                    toast.success('Order berhasil diterima, productmu telah terjual', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            })
            await axios({
                method: "PUT",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                url: `${url}/api/v1/seller/status/${idProduct}`,
                data: {
                    status: "sold"
                },
            })
            // .then(res => {
            //     // open matchmodal
            //     if(res.data.status === 'success'){
            //         setModalIsOpen(true);
            //     }
            // })

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar title="Selling" />
            <Container className='previous'>
                <PreviousButton className="previousButton" />
            </Container>
            <Container >
                <Row>
                    <Col className='dashboardMenu' sm={3}>
                        <DashboardMenu />
                    </Col>
                    <Col sm={7}>
                        {
                            items!=null?

                            items.map(item => {
                            return (
                                <div key={item.id} className={styleSelling.content}>
                                    <div className={styleSelling.product}>
                                        <img className={styleSelling.productPicture} src={item.products.images? item.products.images[0].image_url:"Loading..."} alt="" />
                                        <div className='d-flex align-items-center'>
                                            <h1 className={styleSelling.productTitle}>
                                                {item.products?item.products.name:"Loading..."}
                                            </h1>
                                            <h2 className={styleSelling.productPrice}>
                                                {item.products?Rupiah(item.products.base_price):"Loading..."}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className={styleSelling.product}>
                                        <img className={styleSelling.buyerProfile} src={item.users_buyer?item.users_buyer.image_url:"Loading..."} alt="" />
                                        <div className='ms-3'>
                                            <h1 className={styleSelling.date}>
                                                {item.createdAt ? moment(item.createdAt).format('DD MMM, HH:mm') : 'Loading...'}
                                            </h1>
                                            <h2 className={styleSelling.buyerName}>
                                                {item.users_buyer?item.users_buyer.full_name:"Loading..."}
                                            </h2>
                                            <h1 className={styleSelling.date}>
                                                {item.users_buyer?item.users_buyer.city:"Loading..."}
                                            </h1>
                                        </div>
                                        <h2 className={styleSelling.bid}>
                                            Bid {item.bid_price? Rupiah(item.bid_price):"Loading..."}
                                        </h2>
                                        <div className='status d-flex align-self-center mt-3'>
                                            {item.status === 'pending' ?
                                            <>
                                                <a className="p-3" onClick={(e)=>handleAccepted(e, item.id, item.products.id)}>
                                                    <img className='d-flex' src="/assets/fi_check.svg" alt="" />
                                                </a>
                                                <a className="p-3" onClick={(e)=>handleDecline(e, item.id)}>
                                                    <img className={styleSelling.decline} src="/assets/fi_x.svg" alt="" />
                                                </a>
                                            </>
                                            : item.status
                                            }
                                            {item.status === 'accepted' ?

                                            <>
                                                <MatchModal data={item} />
                                            </>:
                                            <></>
                                            }
                                        </div>

                                    </div>
                                    <hr className="rounded"></hr>
                                </div>
                            );
                        })
                        :

                        <p>Product Selling Empty</p>

                        }
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div >
    )

}

export default Selling;