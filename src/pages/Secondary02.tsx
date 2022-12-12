import { Container } from "react-bootstrap";
import '../assets/css/all.css'
import a from '../../public/imgs/secondaryproduct2.png'

export function Secondary02(){
    return (
        <Container className="default">
            <div>
            Cold Rolled Coil / Sheet Steel Grade: Secondary Coil or Sheet Size: 0.3 mm & 3.2 mm Width: 10mm ~ 1219mm Length: 1000mm and above Coil Weight: 5MT and below Shipment: Prompt Shipment Minimum Quantity Order: 20MT Loading port: Chinese ports or Taiwan ports Origin: China / Taiwan
            </div>
            <img src={a} alt="#"/>
        </Container>
    )
}