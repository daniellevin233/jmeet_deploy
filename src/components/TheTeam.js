import { Row, Col, Image } from "react-bootstrap";

import hadasImg from "../images/hadasImg.png";
import gilImg from "../images/gilImg.png";
import inbarImg from "../images/inbarImg.png";
import danielImg from "../images/danielImg.png";
import noamImg from "../images/noamImg.png";

const TheTeam = () => {
  return (
    <div className="content">
      <h3>The Team</h3>
      <Row>
        <Col className="team">
          <Image alt="hadas" src={hadasImg} roundedCircle /> <br />
          <strong>Hadas Sadeh,</strong>
          <br /> Pursuing a BA in Psychology and comparative literature, Brand &
          marketing lead of Jmeet.
          <br />
          <i>“I’m a huge fun of the Kardashians”</i>
        </Col>
        <Col className="team">
          <Image alt="gil" src={gilImg} roundedCircle />
          <br />
          <strong>Gil Shwartz,</strong>
          <br /> B.Sc. Graduate in High-Tech Sciences, Frontend developer of
          Jmeet.
          <br />{" "}
          <i>“The way to get started is to quit talking and begin doing”</i>
        </Col>
        <Col className="team">
          <Image alt="inbar" src={inbarImg} roundedCircle />
          <br />
          <strong>Inbar Bobrovsky,</strong>
          <br />
          Pursuing a BA in in Psychology and Education, Product Manager & UX/UI
          in Jmeet.
          <br />
          <i>“Hey there, I'm using Whatsapp”</i>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="team">
          <Image alt="noam" src={noamImg} roundedCircle />
          <br />
          <strong>Noam Delberi,</strong>
          <br /> B.Sc. student in Computer Sciences, Backend developer & Machine
          Learning of in Jmeet.
          <br />
          <i>“I know that I know nothing”</i>
        </Col>
        <Col className="team">
          <Image alt="daniel" src={danielImg} roundedCircle />
          <br />
          <strong>Daniel Levin,</strong>
          <br /> B.Sc. Graduate in Computer Sciences, Backend developer &
          Machine Learning of in Jmeet.
          <br /> <i>“There are no solutions; there are only trade-offs.”</i>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default TheTeam;
