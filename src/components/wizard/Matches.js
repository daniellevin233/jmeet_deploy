import { Card, CardGroup, Row, Col, Badge } from "react-bootstrap";

const Matches = ({ data }) => {
  const src =
    "data:image/jpeg;base64,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";
  const temp = {
    "a@gmail.com": {
      firstname: "Gil Shwartz",
      age: 29,
    },
    "b@walla": {
      firstName: "Inbar Bob",
      age: 26,
    },
  };
  const { person1, person2, person3, person4 } = temp;
  return (
    <div>
      <Row>
        <CardGroup>
          <Col>
            <Card className="bg-dark">
              <Card.Img
                style={{ width: "200px", height: "200px" }}
                src={src}
                alt={person1.firstName}
              />
              <Card.ImgOverlay>
                <Card.Text>
                  <Badge variant="warning">
                    {person1.firstName}, {person1.age}
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ width: "200px", height: "200px" }}
                src={src}
                alt={person2.firstName}
              />
              <Card.ImgOverlay>
                <Card.Text>
                  <Badge variant="warning">
                    {person2.firstName}, {person2.age}
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </CardGroup>
      </Row>
    </div>
  );
};

export default Matches;
