import PropTypes from "prop-types";
import { Form, FormLabel, Row, Col } from "react-bootstrap";

const PersonalInfo = ({
  firstName,
  lastName,
  password,
  confirmPassword,
  email,
  terms,
  updates,
  onInputChanged,
  errors,
}) => {
  return (
    <>
      <Row>
        <Col>
          <FormLabel>First Name</FormLabel>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Please fill your first name"
            value={firstName}
            onChange={onInputChanged}
          />
          <p style={{ fontSize: "10px", color: "red" }}>{errors.firstName}</p>
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Please fill your last name"
            value={lastName}
            onChange={onInputChanged}
          />
          <p style={{ fontSize: "10px", color: "red" }}>{errors.lastName}</p>
        </Col>
      </Row>
      <FormLabel>Email Address</FormLabel>
      <Form.Control
        type="text"
        name="email"
        placeholder="Please fill your Email"
        value={email}
        onChange={onInputChanged}
      />
      <p style={{ fontSize: "10px", color: "red" }}>{errors.email}</p>
      <Row>
        <Col>
          <FormLabel>Password</FormLabel>
          <Form.Control
            type="password"
            name="password"
            placeholder="Please choose password"
            value={password}
            onChange={onInputChanged}
          />
          <p style={{ fontSize: "10px", color: "red" }}>{errors.password}</p>
        </Col>
        <Col>
          <FormLabel>Confirm Password</FormLabel>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Please enter your password again"
            value={confirmPassword}
            onChange={onInputChanged}
          />
          <p style={{ fontSize: "10px", color: "red" }}>
            {errors.confirmPassword}
          </p>
        </Col>
      </Row>
      <Form.Group>
        <Form.Check
          type="checkbox"
          name="terms"
          label="I Agree to terms & services"
          checked={terms}
          onChange={onInputChanged}
          isInvalid={errors.terms}
        />
        <Form.Check
          type="checkbox"
          name="updates"
          label="I Agree to recieve Emails containing updates and news about my account"
          checked={updates}
          onChange={onInputChanged}
          isInvalid={errors.updates}
        />
      </Form.Group>
    </>
  );
};

PersonalInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  terms: PropTypes.bool.isRequired,
  updates: PropTypes.bool.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default PersonalInfo;
