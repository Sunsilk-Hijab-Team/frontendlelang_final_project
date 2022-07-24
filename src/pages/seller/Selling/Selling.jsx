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
                setItems(res.data.Orders.Orders)
                console.log("res ordersss"+items);
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
                        
                    </Col>
                </Row>
            </Container>
        </div >
    )

}

export default Selling;