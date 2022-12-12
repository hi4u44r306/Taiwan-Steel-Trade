import { Container } from "react-bootstrap";

export function Contact(){
    return(
        <Container className="contact">
            <div className="contactbox">
                <svg xmlns="http://www.w3.org/2000/svg"  className="mailicon" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                <span>
                    K Glory Industrial Co.,Ltd.
                </span>
                <span>
                    Tel:+886-911-973-111
                </span>
                <span>
                    Fax:+886-2-2775-3536
                </span>
                <span>
                    Skype :daviekuo           
                </span>
                <span>
                    <span>Web : </span>
                    <a href="http://www.steel-trade.tw">http://www.steel-trade.tw</a>
                </span>
                <span>
                    daviekuo@gmail.com
                </span>
            </div>
        </Container>
    )
}