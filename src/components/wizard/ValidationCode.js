import PropTypes from "prop-types";
import { Form, FormLabel, Col, Row } from "react-bootstrap";

const ValidationCode = ({ validationCode, onInputChanged, errors }) => {
  return (
    <div>
      <p>
        We have semt you a confirmation
        <br />
        Email. Please access your account
        <br />
        and enter the confirmation code
        <br />
        you got from us here
      </p>
      <br />
      <Form>
        <Row>
          <Col>
            <FormLabel>Confirmation Code</FormLabel>
            <Form.Control
              type="text"
              name="validationCode"
              placeholder="123456"
              value={validationCode}
              onChange={onInputChanged}
            />
            <p style={{ fontSize: "12px" }}>
              Didn't recieve an Email? <a href="#">Click Here</a> to resend
            </p>
            <p style={{ fontSize: "10px", color: "red" }}>
              {errors.validationCode}
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
};
ValidationCode.propTypes = {
  validationCode: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default ValidationCode;
