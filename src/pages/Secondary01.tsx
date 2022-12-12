import { Container } from "react-bootstrap";
import '../assets/css/all.css'
import a from '../../public/imgs/secondaryproduct1.png'

export function Secondary01(){
    return (
        <Container className="default">
            <div>
            Hot Rolled Coil / Sheet Steel Grade: Secondary Coil or Sheet Size: 1.0 mm – 6.0 mm Width: mostly 910 mm~1230 mm Length: Mostly 2438 mm Coil Weight: 5MT and below Shipment: Prompt Shipment Minimum Quantity Order: 20MT Loading port: Chinese ports or Taiwan ports Origin: China / Taiwan
            </div>
            <img src={a} alt="#"/>
        </Container>
    )
}