import PropTypes from "prop-types";
import { Form, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import femaleImage from "../../images/female.png";
import maleImage from "../../images/male.png";
import unicornImage from "../../images/whatever.png";

import "./IdInfo.css";

const IdInfo = ({
  gender,
  age,
  neighborhood,
  image,
  onInputChanged,
  errors,
}) => {
  return (
    <div>
      <FormGroup>
        <FormLabel>
          I am a...
          <Form.Control
            type="radio"
            name="gender"
            value="male"
            onChange={onInputChanged}
          />
          <img className="genderImg" alt="male" src={maleImage} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="gender"
            value="female"
            onChange={onInputChanged}
          />
          <img className="genderImg" alt="female" src={femaleImage} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="gender"
            value="whatever"
            onChange={onInputChanged}
          />
          <img className="genderImg" alt="whatever" src={unicornImage} />
        </FormLabel>
        <p style={{ fontSize: "10px", color: "red" }}>{errors.gender}</p>
      </FormGroup>
      <Row>
        <Col>
          <FormLabel>
            Age
            <Form.Control
              type="number"
              name="age"
              value={age}
              onChange={onInputChanged}
            ></Form.Control>
          </FormLabel>
          <p style={{ fontSize: "10px", color: "red" }}>{errors.age}</p>
        </Col>
        <Col>
          <FormLabel>
            I live in...
            <Form.Control
              as="select"
              onChange={onInputChanged}
              name="neighborhood"
              value={neighborhood}
            >
              <option hidden>Choose...</option>
              <option value="rehavia">Rehavia</option>
              <option value="oldkatamon">Old Katamon</option>
              <option value="nachlaot">Nachlaot</option>
              <option value="frenchhill">French Hill</option>
              <option value="Nayot">Nayot</option>
              <option value="Arnona">Arnona</option>
            </Form.Control>
          </FormLabel>
          <p style={{ fontSize: "10px", color: "red" }}>
            {errors.neighborhood}
          </p>
        </Col>
      </Row>
      <FormGroup>
        <FormLabel>
          Let's see your beautiful face..
          <Form.Control
            type="file"
            name="image"
            value={image}
            onChange={onInputChanged}
          />
        </FormLabel>
        <p style={{ fontSize: "10px", color: "red" }}>{errors.image}</p>
      </FormGroup>
    </div>
  );
};

IdInfo.propTypes = {
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  neighborhood: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default IdInfo;
