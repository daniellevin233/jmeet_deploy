import { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import Hobbies from "./Hobbies";
import IdInfo from "./IdInfo";
import PersonalInfo from "./PersonalInfo";
import ValidationCode from "./ValidationCode";
import EducationInfo from "./EducationInfo";
import Matches from "./Matches";
import { useFetch } from "../../hooks/useFetch";
import TabsPage from "./TabsPage";

const SignUpWizard = () => {
  const temp = {
    "a@gmail.com": {
      firstName: "Gil Shwartz",
      age: 29,
    },
    "b@walla": {
      firstName: "Inbar Bob",
      age: 26,
    },
    "c@walla": {
      firstName: "daniel levin",
      age: 22,
    },
    "d@walla": {
      firstName: "noam del",
      age: 23,
    },
  };
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const base_url = "https://main.d34t4lmdyc81y3.amplifyapp.com";
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  // using useFetch hook to get the data from url
  // const [{ data, error, loading }, callApi] = useFetch();

  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    terms: false,
    updates: false,
    validationCode: "",
    gender: "",
    age: 0,
    neighborhood: "",
    image: "",
    degree: "",
    faculty: "",
    major: "",
    secondMajor: "",
    year: 0,
    basketball: true,
  });
  const [isMatch, setIsMatch] = useState(false);

  const steps = [
    "Just a few questions...",
    "Let us know it's you",
    "Personal info",
    "Why are you in uni?",
    "What are you into?",
  ];

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormValid = () => {
    const formErrors = {};
    if (!signupData.firstName) formErrors.firstName = "Please enter first-name";
    if (!signupData.lastName) formErrors.lastName = "Please enter last-name";
    if (!signupData.email) {
      formErrors.email = "Please enter an email address";
    } else {
      if (!validateEmail(signupData.email))
        formErrors.email =
          "Please enter a valid email address (example: name@domain.com)";
    }
    if (!signupData.password) formErrors.password = "Please enter a password";
    if (!signupData.confirmPassword)
      formErrors.confirmPassword =
        "You must confirm the password in order to proceed";
    if (signupData.password !== signupData.confirmPassword)
      formErrors.confirmPassword = "The passwords are not match";
    if (!signupData.terms) formErrors.terms = true;
    if (!signupData.updates) formErrors.updates = true;
    if (activeStep === 1 && signupData.validationCode !== "123456")
      formErrors.validationCode = "please enter 123456";
    if (activeStep > 1) {
      if (!signupData.gender) formErrors.gender = "Please choose a gender";
      if (!signupData.age) formErrors.age = "Please enter your age";
      if (signupData.age < 18) formErrors.age = "SORRY! You must be above 18";
      if (!signupData.neighborhood)
        formErrors.neighborhood = "Please choose your neighborhood";
      if (!signupData.image)
        formErrors.image = "Please uplaod a picture of your beautiful face";
    }
    if (activeStep > 2) {
      if (!signupData.degree) formErrors.degree = "Please enter your degree";
      if (!signupData.faculty) formErrors.faculty = "Please enter your faculty";
      if (!signupData.major) formErrors.major = "Please enter your major";
      if (!signupData.year) formErrors.year = "Please enter your year";
      if (signupData.year <= 0 || signupData.year > 50)
        formErrors.year = "Please enter a valid year";
    }
    if (activeStep > 3) {
      if (!signupData.basketball)
        formErrors.basketball = "Please enter the basketball";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    if (activeStep === steps.length - 1) {
      setIsMatch(true);
      console.log("1", signupData);
      const requestOptions = {
        method: "POST",
        // mode: "no-cors",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(signupData),
      };
      fetch("https://main.d34t4lmdyc81y3.amplifyapp.com/signup", requestOptions)
        .then((response) => response.json())
        .then((data) =>
          console.log("Response from flask:", JSON.stringify(data))
        )
        .catch((e) => console.log("Error:", e));

      // .then((response) => setData(response))
      // .then(() => console.log("response from flask:", data));

      // callApi(`${base_url}/signup/post`, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
      //     "Access-Control-Allow-Methods": "POST",
      //     "Access-Control-Allow-Headers": "Content-Type",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(signupData),
      // }).then(() => {
      //   console.log("response from post- DATA:", data);
      //   setIsMatch(true);
      //   alert("Form Submitted");
      // });
    } else {
      setActiveStep((prevState) => prevState + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: checked ? (type === "checkbox" ? checked : value) : value,
    }));

    if (value) {
      if (Object.keys(errors).find((a) => a === name)) {
        setErrors((prevState) => ({ ...prevState, [name]: undefined }));
      }
    }
  };

  const showActiveStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <PersonalInfo
              firstName={signupData.firstName}
              lastName={signupData.lastName}
              email={signupData.email}
              password={signupData.password}
              confirmPassword={signupData.confirmPassword}
              terms={signupData.terms}
              updates={signupData.updates}
              onInputChanged={handleInputChange}
              errors={errors}
            />
            <ProgressBar striped variant="info" now={10} label="1/5 Hi!" />
          </div>
        );
      case 1:
        return (
          <div>
            <ValidationCode
              validationCode={signupData.validationCode}
              onInputChanged={handleInputChange}
              errors={errors}
            />
            <ProgressBar striped variant="info" now={20} label="2/5" />
          </div>
        );
      case 2:
        return (
          <div>
            <IdInfo
              gender={signupData.gender}
              age={signupData.gageender}
              neighborhood={signupData.neighborhood}
              image={signupData.image}
              onInputChanged={handleInputChange}
              errors={errors}
            />
            <ProgressBar
              striped
              variant="info"
              now={40}
              label="3/5 So close.."
            />
          </div>
        );
      case 3:
        return (
          <div>
            <EducationInfo
              degree={signupData.degree}
              faculty={signupData.faculty}
              major={signupData.major}
              secondMajor={signupData.secondMajor}
              year={signupData.year}
              onInputChanged={handleInputChange}
              errors={errors}
            />
            <ProgressBar
              striped
              variant="info"
              now={60}
              label="4/5 One more step.."
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Hobbies
              basketball={signupData.basketball}
              onInputChanged={handleInputChange}
              errors={errors}
            />
            <ProgressBar striped variant="info" now={99} label="5/5 Yay!" />
          </div>
        );
      default:
        throw Error("Unknown step");
    }
  };

  return !isMatch ? (
    <Form className="content" onSubmit={handleFormSubmit}>
      <h2>{steps[activeStep]}</h2>
      {showActiveStep()}
      <Button
        variant="info"
        disabled={activeStep === 0}
        onClick={() => setActiveStep((prevState) => prevState - 1)}
      >
        {"< Back"}
      </Button>
      <Button variant="primary" type="submit">
        {activeStep === steps.length - 1 ? "Submit" : "Next >"}
      </Button>
    </Form>
  ) : (
    <TabsPage data={temp} />
  );
};

export default SignUpWizard;
