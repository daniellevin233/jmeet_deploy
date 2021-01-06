import PropTypes from "prop-types";
import { Form, FormLabel, Row, Col, FormGroup } from "react-bootstrap";

const EducationInfo = ({
  degree,
  faculty,
  major,
  secondMajor,
  year,
  onInputChanged,
  errors,
}) => {
  return (
    <div>
      <Row>
        <Col>
          <FormLabel>
            Degree
            <Form.Control
              as="select"
              defaultValue="undergraduate"
              onChange={onInputChanged}
              name="degree"
              value={degree}
            >
              <option hidden>Degree type...</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="doctoral">Doctoral</option>
            </Form.Control>
          </FormLabel>
          <p style={{ color: "red" }}>{errors.firstName}</p>
        </Col>
        <Col>
          <FormLabel>Faculty</FormLabel>
          <Form.Control
            type="text"
            name="faculty"
            placeholder="Please fill your faculty"
            value={faculty}
            onChange={onInputChanged}
          />
          <p style={{ color: "red" }}>{errors.faculty}</p>
        </Col>
      </Row>
      <Row>
        <FormLabel>My major is</FormLabel>
        <Form.Control
          type="text"
          name="major"
          placeholder="Please fill your Major"
          value={major}
          onChange={onInputChanged}
        />
        <p style={{ color: "red" }}>{errors.major}</p>
        <FormLabel>My second major is (optional)</FormLabel>
        <Form.Control
          type="text"
          name="secondMajor"
          placeholder="Please fill your second major"
          value={secondMajor}
          onChange={onInputChanged}
        />
        <p style={{ color: "red" }}>{errors.secondMajor}</p>
      </Row>
      <Row>
        <FormLabel>Year</FormLabel>
        <Form.Control
          type="number"
          name="year"
          placeholder="Please fill your year"
          value={year}
          onChange={onInputChanged}
        />
        <p style={{ color: "red" }}>{errors.year}</p>
      </Row>
    </div>
  );
};

EducationInfo.propTypes = {
  degree: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  secondMajor: PropTypes.string,
  year: PropTypes.number.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EducationInfo;
