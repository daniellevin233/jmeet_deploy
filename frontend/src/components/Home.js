import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const handleButtonClick = () => history.push("/signup");
  return (
    <div className="content">
      <h3>
        <strong>
          Connect with other JLM
          <br />
          students like you :)
        </strong>
      </h3>
      <br />
      <p>
        Want to easily meet students that share
        <br />
        your hobbies? Looking for small study
        <br />
        groups for final exams? Answer a few
        <br />
        questions and let the app match the right
        <br />
        person or group for you!
      </p>
      <Button
        // href="/sign-up"
        variant="primary"
        onClick={() => handleButtonClick()}
      >
        {"I want in! >"}
      </Button>
    </div>
  );
};

export default Home;
