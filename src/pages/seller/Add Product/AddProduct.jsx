import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styleAddProduct.css';
import Image_1 from './Group_1.png';
import Image_2 from './Group_86.png';
import styleRegister from '../../../components/Register/register.module.css';
import { Form, Button } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import DataService from '../../../services/lelangService'

export default class addProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChaneCategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);
        this.state = {
            id: null,
            productname: "",
            price: "",
            category: "",
            description: "",
            published: false,
            submitted: false,
        };
    }

    onChangeProductname(e) {
        this.setState({
            productname: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveProduct() {
        const data = {
            productname: this.state.productname,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description,
            submitted: true,
        };

        // ini diambil dari kelas yang diimport dari data
        DataService.create(data)
            .then(response => {
                this.state({
                    id: response.data.id,
                    productname: response.data.title,
                    description: response.data.description,
                    published: response.data.published,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    newProduct() {
        this.setState({
            id: null,
            productname: "",
            price: "",
            category: "",
            description: "",
            published: false,
            submitted: false
        })
    }

    render() {
        return (
            <div>
                <Navbar title="Add Product" />
                <Container>
                    <PreviousButton />
                </Container>
                <Container className='form'>
                    {this.state.submitted ? (
                        <div>
                            <h4>Produkmu telah ditambahkan</h4>
                            <button
                                className="btn btn-success" onClick={this.newProduct}>
                                Tambahkan lainya
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Row>
                                <Col sm={12}>
                                    <Form className={styleRegister.formStyle}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='add-product-label'>
                                                Product Name
                                            </Form.Label>
                                            <Form.Control
                                                className={styleRegister.rounded}
                                                type="text"
                                                placeholder="Product Name"
                                                id="productname"
                                                required
                                                valeu={this.state.productname}
                                                onChange={this.onChangeProductname}
                                                name="productname"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='add-product-label'>Price</Form.Label>
                                            <Form.Control
                                                className={styleRegister.rounded}
                                                type="text"
                                                placeholder="Rp 0,00"
                                                id="price"
                                                required
                                                value={this.state.price}
                                                onChange={this.onChangePrice}
                                                name="price"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='add-product-label'>Category</Form.Label>
                                            <Form.Control
                                                className={styleRegister.rounded}
                                                type="text"
                                                placeholder="Choose Category"
                                                id="category"
                                                required
                                                value={this.state.category}
                                                onChange={this.onChangeCategory}
                                                name="category"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='add-product-label'>Product Description</Form.Label>
                                            <Form.Control
                                                className={styleRegister.rounded}
                                                type="text"
                                                placeholder="ex: Jalan Ikan Hiu 33"
                                                id="description"
                                                required
                                                value={this.state.description}
                                                onChange={this.onChangeDescription}
                                                name="description"
                                            />
                                        </Form.Group>

                                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='add-product-label'>Category</Form.Label>
                                        <span className="icons-span" onClick={handelToggle}>
                                            {passwordIcon}
                                        </span>
                                        <Form.Control className={styleRegister.rounded} placeholder="min 6 characters" type={passwordType} />
                                    </Form.Group> */}
                                    </Form>
                                </Col>

                                <Col sm={12} className='photo d-flex flex-column align-content-center'>
                                    <img className='image_1' src={Image_1} alt="" />
                                    <p className='add-photo-label'>Product Photo</p>
                                    <div className='d-flex additional'>
                                        <img className='image_2' src={Image_2} alt="" />
                                        <img className='d-flex' src={Image_2} alt="" />
                                    </div>
                                    <p className='add-photo-label-more'>Add More</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='button-add-product'>
                                        <Button className='styleButtonPreview' type="submit">
                                            Preview
                                        </Button>
                                        <span></span>
                                        <Button
                                        className='styleButton'
                                        variant="primary"
                                        type="submit"
                                        onClick={this.saveProduct}
                                        >
                                            Post
                                        </Button>
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </div>)}
                </Container>
            </div>
        )
    }
}