import React, { useState } from 'react';
import stylePopup from './stylePopup.module.css';
import { Form, Row, Col} from 'react-bootstrap';
import { IoClose } from 'react-icons/io5'

function PopUp() {
    const [modal, setModal] = useState(false);
    const setIcon = useState(<IoClose />)
    const togglePopup = () => {
        setModal(!modal);
        setIcon(IoClose);
    }

    return (
        <div>
            <button
                className={stylePopup.roundedButtonMenu}
                onClick={togglePopup}
            >
                saya tertarik dan ingin Nego
            </button>
            {modal &&
                (
                    <div className={stylePopup.modal}>
                        <div className={stylePopup.overlay}></div>
                        <div className={stylePopup.modalContent}>

                            <strong>Masukan Harga Tawarmu</strong><br /><br />

                            <div className={stylePopup.textPopup}>
                                Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual
                            </div>

                            <div className={stylePopup.imagePopup}>
                                <div className={stylePopup.row}>
                                    <div className={stylePopup.satu}>
                                        <div className={stylePopup.img}><img src="data:image/webp;base64,UklGRioLAABXRUJQVlA4IB4LAAAwNACdASrDAIAAPpFEnEolo6Khpti60LASCWIAzyZqfrnckfH9F+VXto2j/A8kUdHtw/deuD/Q+przAP1G6avmQ/bH1cv9V6yfQA/o3+q6z/0FP2l9NH2YP3E/bL2r9VJUp8RfKX7NSS/hD97xR8Aj11vg4AvqN/yeNbuVf+FyNdAPxM9Cv1H7Bv82/vfpgezn0VS/b2jGUhqTEBZlSGCdC2eWwfjB1FP2SfNbmIDctBXeRpaaAtUMU27Y+6wR9YrD1519JP6oNEXbTnS8oPRXZrGjd+2Hts+6jP7eWkiqTZzirpRNF0dfLbGG8E2w05wUrBJ3wyh+aWsgEIrKKEMf2g1C3fHvLKOKvxuev4Ytj4eNWsmxg8jw8gMEya0woIFKPcIo63NbQbd5EjZBiwftJxAHDUWdo3md+5swwBzlCX4ctcEZwTn1GH7Dz1FwWNg5DIR9z1xHwjrCSdk/53u1q3h6njEBgMfnsEAlGt3d6v5tz2A0HzsD08D5mozqZ5LZeMjFaNCptL/xDiGPOUgPlN3nK2TUHdGpL09MNADjEvdZ5PzEF0QQ/AAA/vKZn/e7H93Y/u7H7qf8PAKDmmjVLigoYXcFrH10n+yx3Hm+DNh4N7gM3ItOL8fOqifm4qx/cgw+IN4c9vOJo1F54R1ZzVE159r3YIDozHL+c+8vbaNLKsyn5NiN1XScSSDztWhrALm5eX1udpZ5njRq6/qAI9oLx8tOCOZWfuSx/rHq2uOF/J65VSWSEveE+ORiqaYQ/a6LSC8HTXT+NhYoAtNs4RAVYs9w/3/fsUFj5sZmMwsrvYuuqfjcT9LD1coDtnzm5GIluf+sv9d3dylsuKlWUDGPZAR0wP019pnUIa1x7Ro9nG/533T3PcB962v04Czt11I8am1LFZ4aKkGb1i/BPKhs5SmlowfWXB2W/1/IG7K5nHeXuQe6We/BUsFQHzu2Tsp3Dm5/UoM8eA0KtlTYh+7C4zvYtI4pY+Gj+BoSaVrlCk3howBn+GKhUyDaFwL2N2XvzFBwApubwVXyjZiAPVPGycWwUzAo3THTdm76/NEW9ZB9uBXt4IRCFrfHV1R7axcey/ytD+A6VnvJ9xeLAlvfB6/TouPqQvIdekl/1NVSur5AZqMeUZT7+JN3rasFw84xYVoaObq/lZ0iz03DyERaHeG7qp4S8gQFIWbc2aiO6XeZ7iKt0qZTk7snusEp6G4QMOPfUtMhai3o640UkK8Oau/qdzjgoolZ4eiCSkwYCaCgo8lVcbiUCUkjJoE3zrdg2linA7NINNsqlAP6Xd7T7a4YC6S9JpWVZpkNHf1BqlQn/EyArvfV5OgVL9gzy3+WtjqREY6C4RsFnBoaXvnGgoJFg+cfnOO7XzaBW/cYhb/oJE6L76X/VAFe6F8xs+apIN20fZdHkeoiy6paiqbO9/fEZUIpb79qboNXQ6mSxx3yE3668H9oFSnFII5GHhQeG2mXxClKYwTC9/Ob4UnTG4PHjpZdeww353JN/95Tdq8WX0Ez88e7hrzQPz8K57FnurzPY3D7OO4l7eAFKBmbpmGaTBZW7xAOD90ODCBECVO6Wx48OSHmHj6l/8dFeKQP/C1fx6sxXMc+j7fieml6PDDKWgIDfHPXS8c/MhvYYA5ItiCcwryUb+3YjXl2+LFEtbJ2CgTXRBrsiCqFssVQvSCQJEGeTo70sSSuWiIegmM3hY1P5dk0MZSLa2XKGxT2lmkkaIOptZHAKUMc27rzpFL5Ymok7Z27S3Ty2xLkqJoK7GamMFp3zU87rGWavwABImfJ+46CgN/VQZdiq4XTV0AD0f5cmg7OIM86gF/pCeKW0RGP92W1i3GXTg6+2zYmED8D3+WRkmSu7+XfQhtyg9Bo63AantM6LaDEN1xRu8IIY1YVEVMdck/c8xW/YlS4Oosm0zkzA1rYCqNNsLx1WkcOr7aHaXqZkc/dYg+eN+8KQLxVjwC0N06UMW4B2VYKlcY4wgL8egrCucDrtfJGUrwONquTM5M09X3Inh/WYSENNQWVV59pZJIIVEggvVtgG5evMP+Ss1BWhDiuuBY7QLkm3uxZPqAoh3pwTlrkAP5tSy7JmoQND/JbWEsm6mKlgYdDFB17Ypuq4thhawGo3dWoaHixt6cTEG8cG3YSV99pb624DbzvmlyIUoFsSDSoO63rdOSXhrjuvn4/0ML1JklaoruWL+zdQgn/V1X9PFxEMNKNE/7uFoiP72jT4ogjVAFJsrYzlVmjH9brkEH+KXIUo5bLYkQzyTjSEF05LbscWoAa16jOny0+2eM/Dgw8iNFlgtavwVPFN7vTgQ2gqDpgNd0W+eRCie+XUKvDbA21neUXqmi7v0va46bCbopJdOTm7Gj0CI1UTN4b+4MHKxKjucmsrkGu7NkBmiV8YxcZ8ZFqksz0Koc2nOYY+tANQp31AxmFbodsd9bPlvUBhTiYwDGuLGmNduAXqaHn8TTjWvYqWH73xN/+pl/B33o0BjADMzAho0nofWRvRsCdK8oo4MVbFHdRkHDZNPJ3/1OCqeU4H/ZHPYwUHYb4uBKtAPVNh0zf1uqw+McIxkgq8HmW5V+/6yuGQBV90f8zNLBU2uLxmJjnzDGGVqJ+6QpBp6nEAoslJq2ZbcHNTqHTh7UW8Lx73E4MtLljKkDs/s7LACc8UfuLuK1DjxbmDq2XdtlUszrJWgytSU9bc3pUG2xd5Se7AVCdjJ+FjjeR3gD8AdoIgZtKrtgH4FQyih5fSmPGrOZFVSRawEkdjJkEXhJDZ5pmv8p7/6+iCeXaS1/+ll8Xv/7NAnEPzuYc95Y37pR4qWc2P7nbHxFyanrdUWmdmwzLEhGod2qy2HehDb+9FQ3cZLT7LLBTi4Dg+oVP0DY71P7GXq8M11GZ8TcVQIrfANVy8K2N8YUiMskpeLYGzoWwUyAhpJ7NZJR/BrI+oPSWnIhjb9IpnnZrpz3AgL1ZA/ZrZ/+Y8FfilXfK8zhNT0BrpsrKGyKCQz47ZZBPSBHRovlnNU4I8/tcGAalYaNMVz42jlwnr0boPr0O/qTV2QHbdjokwfbzglA18Zp9JUgcetWWXbeGRNYyPvNPhChIOi7nxgYGBTgP7Vjf6raFPf/n5M7bpW86gHZjnJ3JafxpHwmKlY1CdJokLT7MOpOHNEXusjB3Tr7Yo2OCbPpM1mvAc7W0TlNVP5dCi8sRZZFa4K0xnQsyyaBnHarJl7XEyo/uSZZb0NAm4Ze2QVEyy0jd+JHRblwq1smYWzuegbVynb1dIiFnXC/DOtFywXxZFgCn1niQJXD6cmjSpdaj6oAHvC0FDkdtuN8Mzzvop62Hc05t3tX3r+IuZFGB5xLBf9LHLj6MJ6bFivkD4YOQJ/nZk6IX7nf48HuuGiOgYTsz4E/DhJlen0tPrcs9OnUdP0l5gv0AR+vW5aVdaDiqGDRsHGNFEImsyQSiT3dBWeCufXAQ4P3mi+yyoS/+yVpb+C54WplFhbAjpZRGVUcP6ygenrACd56aix0Bd9KPLRBcAgud6dlQEe+1+w1EipmcZ88/BZaye2L/mR3zAe04SCuY955Mw2OdkL92j0QpFogUk75EBRIk1bKzxp06tcX3mFJfgOrni5E/+mzvRE2YFYCY/Cl5jnHwsEARXIongRHfo63AIm4KMDhALCHH79AXjpf4IUewaCPJ0qtlvC7uxfueaX5E4O2ApHs93YvwMm3xDmCyn7tnPRzx59QXGukMIApA5PdQvzVEMMhB9nfc3kDspsX7Gz2FGpno3dWB0dzLJH8gwlwAAA==" alt="" /></div>
                                    </div>
                                    <div className={stylePopup.dua}>
                                        <strong>Jangan Tangan</strong><br />
                                        Rp 250.000
                                    </div>
                                </div>
                            </div>
                            <br /> Harga Tawar
                            

                            <div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            className={stylePopup.styleForm}
                                            type="text"
                                            placeholder="Rp. 0,00" />
                                        <Form.Text className="text-muted d-flex justify-content-start">
                                        </Form.Text>
                                    </Form.Group>
                                </Form>
                            </div>

                            <button className={stylePopup.roundedButton}>Kirim</button>

                            <div className={stylePopup.closeModal}
                                onClick={togglePopup}
                            >
                                {setIcon}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PopUp