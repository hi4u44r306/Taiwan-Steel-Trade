import { Container } from "react-bootstrap";
import a from '../../public/imgs/Primeproduct1.png'
import '../assets/css/all.css'

export function Primary01(){
    return (
        <Container className="default">
            <div>
             Forged Bar ( Round / Square ) Steel Grade: S45C / SCM440 / SCM420 / SNCM439 / SACM645 Round: 250mm ~ 610mm ; Square: 250mm x 250mm ~ 450mm x 450mm Length: 10mm and up to 13 meters Shipment: Within 50 days after order confirmation Minimum Quantity Order: 20MT Loading port: Shanghai port Origin: China
            </div>
            <img src={a} alt="#"/>
        </Container>
    )
}