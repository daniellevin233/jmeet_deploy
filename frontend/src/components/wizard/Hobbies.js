import PropTypes from "prop-types";
import { FormGroup, FormLabel, Form } from "react-bootstrap";
import studyImg from "../../images/Study group.png";
import basketballImg from "../../images/Basketball.png";
import gardeningImg from "../../images/Gardening.png";
import artImg from "../../images/Arts.png";
import partyImg from "../../images/Party.png";
import gamingImg from "../../images/Gaming.png";
import musicImg from "../../images/Music.png";
import yogaImg from "../../images/Yoga.png";
import soccerImg from "../../images/Soccer.png";
import travelImg from "../../images/Traveling.png";
import "./Hobbies.css";

const Hobbies = ({ basketball, onInputChanged, errors }) => {
  return (
    <div>
      <FormGroup>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="study"
            onChange={onInputChanged}
          />
          <img alt="study" src={studyImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="basketball"
            onChange={onInputChanged}
          />
          <img alt="basketball" src={basketballImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="gardening"
            onChange={onInputChanged}
          />
          <img alt="gardening" src={gardeningImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="party"
            onChange={onInputChanged}
          />
          <img alt="party" src={partyImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="arts"
            onChange={onInputChanged}
          />
          <img alt="arts" src={artImg} />
        </FormLabel>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="gaming"
            onChange={onInputChanged}
          />
          <img alt="gaming" src={gamingImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="music"
            onChange={onInputChanged}
          />
          <img alt="music" src={musicImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="yoga"
            onChange={onInputChanged}
          />
          <img alt="yoga" src={yogaImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="soccer"
            onChange={onInputChanged}
          />
          <img alt="soccer" src={soccerImg} />
        </FormLabel>
        <FormLabel>
          <Form.Control
            type="radio"
            name="hobbies"
            value="travel"
            onChange={onInputChanged}
          />
          <img alt="travel" src={travelImg} />
        </FormLabel>
      </FormGroup>
    </div>
  );
};
Hobbies.propTypes = {
  basketball: PropTypes.bool.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default Hobbies;
