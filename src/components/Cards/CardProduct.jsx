import { Card, Container} from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import Gambar from './behnam-norouzi-oLgurfJCrP4-unsplash.jpg'

function CardComponent() {
    return (
        <Container className={styleCard.container} md>
            <div className={styleCard.cardBody}>
                    <Card className={styleCard.cardStyle}>
                        <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                        <Card.Body>
                            <Card.Title>Jam Tangan</Card.Title>
                            <Card.Text className={styleCard.styleCardText}>
                                Aksesoris
                            </Card.Text>
                            <Card.Title>Rp 200.000</Card.Title>
                        </Card.Body>
                    </Card>
            </div>
        </Container>
    );
}

export default CardComponent;