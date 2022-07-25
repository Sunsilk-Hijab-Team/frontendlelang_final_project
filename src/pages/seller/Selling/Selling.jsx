import react from 'react';

// import NavbarafterLogin command
import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import DashboardMenu from '../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import Rupiah from '../../../components/CostumFunction/Rupiah';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

function Selling(){
    const url = `${REACT_APP_API_URL}`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

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
                setLoading(false)
                setItems(res.data.Orders)
                console.log(res.data.Orders, 'or')
                // console.log("res ordersss ###"+res.data.Orders);
            })
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getSellings();
    })

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
                    <Col sm={9}>
                        {

                        items !== null ?

                        items.map((item, index) => {
                            return (
                                <div key={index} className="bg-light mb-2">
                                    <img className="img-fluid" src={item.products.images.length === 0 ? 'No Image' :  item.products.images[0].image_url} alt="ini image" />
                                    <p>{item.products.name}</p>
                                    <p>{item.products.base_price}</p>
                                    <div>
                                        <img alt="ini image" />
                                        <div className='ms-3'>
                                            <h1>20 Apr, 14:04</h1>
                                            <h2>Taylor Swift</h2>
                                            <h1>Gresik</h1>
                                        </div>
                                        <h2>Bid Rp 200.000</h2>
                                        {/* <div className='status d-flex align-self-center mt-3'>
                                            <a href="">
                                                <img src="" alt="image" />
                                            </a>
                                        </div> */}
                                    </div>
                                    <hr className="rounded"></hr>
                                </div>

                            );
                        })

                        :

                        <p className="text-center">Oppss... Belom ada product yang di tawar..</p>

                        }
                    </Col>
                </Row>
            </Container>
        </div >
    )

}

export default Selling;