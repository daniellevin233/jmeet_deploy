import { Card, Badge } from "react-bootstrap";

const Person = ({ firstName, age, image }) => {
  return (
    <div>
      <Card className="bg-dark" style={{ width: "150px" }}>
        <Card.Img
          style={{ width: "150px", height: "150px" }}
          src={image}
          alt={firstName}
        />
        <Card.ImgOverlay>
          <Card.Text>
            <Badge variant="warning">
              {firstName}, {age}
            </Badge>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Person;
