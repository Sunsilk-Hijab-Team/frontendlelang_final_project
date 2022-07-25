import react from 'react';

// import NavbarafterLogin command
import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import DashboardMenu from '../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import {Rupiah} from '../../../components/CostumFunction/Rupiah';
import styleOrder from './Order.module.css';
import moment from 'moment';
import MatchModal from '../../../components/MatchModal/MatchModal';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';


const { REACT_APP_API_URL } = process.env;

function MyOrder(){
    const url = `${REACT_APP_API_URL}`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const token = localStorage.getItem('token');
    let nav = useNavigate();

    const getOrders= async () => {
        setLoading(true);
        try{
            await axios.get(`${url}/api/v1/buyer/order/all`,{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                setLoading(false)
                setItems(res.data.data.order)
                console.log(res.data, 'orderssss')
                // console.log("res ordersss ###"+res.data.Orders);
            })
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getOrders();
    })

    return (
        <div>
            <Navbar title="My Order" />
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
                                <div key={item.id} className={styleOrder.content}>
                                    <div className={styleOrder.product}>
                                        <img className={styleOrder.productPicture} src={item.products.images? item.products.images[0].image_url:"Loading..."} alt="" />
                                        <div>
                                            <h1 className={styleOrder.productTitle}>
                                                {item.products?item.products.name:"Loading..."}
                                            </h1>
                                            <h2 className={styleOrder.productPrice}>
                                                {item.products?Rupiah(item.products.base_price):"Loading..."}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className={styleOrder.product}>
                                        <h2 className={styleOrder.bid}>
                                            Bid {item.bid_price? Rupiah(item.bid_price):"Loading..."}
                                        </h2>
                                        <div className='status d-flex align-self-center mt-3'>
                                            {item.status === 'pending' ?
                                            <>
                                             <p>Menunggu Konfirmasi</p>
                                            </>
                                            : item.status
                                            }
                                            {item.status === 'accepted' ?

                                            <>
                                                <p>Tunggu ya, kamu akan segera dihubungi oleh seller</p>
                                            </>:
                                            <></>
                                            }
                                            {item.status === 'rejected' ?
                                            <>
                                                <a href={"/buyer/logged/rebid/"+item.id} >Bid Ulang</a>
                                            </>
                                            :<></>
                                            }
                                        </div>

                                    </div>
                                    <hr className="rounded"></hr>
                                </div>
                            );
                        })
                        :  <p>Data Order Empty</p>
                        }
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div >
    )

}

export default MyOrder;