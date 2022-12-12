import { Container } from "react-bootstrap";
import world from '../../public/imgs/world.png'
import "../assets/css/all.css"

export function About(){
    return (
        <Container className="default">
            <div>
            About our company " Trust worthy agency in Taiwan, China, Thailand, Korea and other South East Asia countries. With our decades of experience in steel industry and at site cargo inspection on stock products. It is guaranteed that you are buying what you see.
            </div>
            <img src={world} alt="world"/>
        </Container>
    )
}