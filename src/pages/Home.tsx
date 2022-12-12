import { Container } from "react-bootstrap";

export function Home(){
    return (
        <Container className="home" style={{overflow: "scroll"}}>
            <div className="homespan">
                <svg xmlns="http://www.w3.org/2000/svg" className="mailicon" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>
                <div>
                    Trust worthy agency in Taiwan, China, Thailand, Korea and other
                    South East Asia countries. With our decades of experience in steel industry
                    and at site cargo inspection on stock products. It is guaranteed that you are
                    buying what you see.
                </div>
            </div>
            <div className="homecontact">
                 <svg xmlns="http://www.w3.org/2000/svg" className="mailicon" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                <div>
                    K Glory Industrial Co.,Ltd.
                </div>
                <div>
                    Tel: +886-911-973-111
                </div>
                <div>
                    Fax: +886-2-2775-3536
                </div>
                <div>
                    Skype: daviekuo           
                </div>
                <div>
                    <span>Web : </span>
                    <a href="http://www.steel-trade.tw">http://www.steel-trade.tw</a>
                </div>
                <div>
                    daviekuo@gmail.com
                </div>
            </div>
        </Container>
    )
}