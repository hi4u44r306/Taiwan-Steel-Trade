import { Container } from "react-bootstrap";
import '../assets/css/all.css'
import a from '../../public/imgs/Primeproduct2.png'

export function Primary02(){
    return (
        <Container className="default">
            <div>
                Hot Rolled Round Bar Steel Grade: S45C / SCM440 / SCM420 / Size: 10 mm ~ 280 mm Length: 10mm and up to 13 meters Shipment: Within 2 weeks after order confirmation Minimum Quantity Order: 20MT Loading port: Chinese ports or Taiwan ports Origin: China / Taiwan
            </div>
            <img src={a} alt="#"/>
        </Container>
    )
}