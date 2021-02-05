import "./App.css";
import React, { useState } from "react";
import ConfirmButton from "../src/reusable.pattrens/button";
import BasicTextFields from "../src/reusable.pattrens/textfield";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function App() {

  const [showStepOne, setStepOne] = useState(true);
  const [showStepTwo, setStepTwo] = useState(false);
  const [showStepThree, setStepThree] = useState(false);
  const [value, setValue] = useState("");
  const [valueNum, setNumValue] = useState();

  function onClickStepOneSubmit() {
    setStepOne(false);
    setStepTwo(true);
    setStepThree(false);
  }

  function onClickStepTwoSubmit(event) {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
  }

  function handleClickCancel() {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitTextfield = (event) => {
    setNumValue(event.target.value);
  }

  const StepOneComponent = () => {
    return (
      <div className="stepOne">
        <h3>
          <b>Step 1 : Select your shape</b>
        </h3>
        <p>
          Please select the shape that you would like to calculate the area of
          and press the button "Go to step 2"
        </p>
        <div>
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select the shape</FormLabel>
              <RadioGroup
                aria-label="shapes"
                name="shapes"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Rectangle"
                  control={<Radio />}
                  label="Rectangle"
                />
                <FormControlLabel
                  value="Square"
                  control={<Radio />}
                  label="Square"
                />
                <FormControlLabel
                  value="Circle"
                  control={<Radio />}
                  label="Circle"
                />
                <FormControlLabel
                  value="Ellipse"
                  control={<Radio />}
                  label="Ellipse"
                />
              </RadioGroup>
            </FormControl>
          </form>
          <div className="buttonContainer">
            <div>
              <ConfirmButton
                label="Go to step 2"
                color="primary"
                onClick={onClickStepOneSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StepTwoComponent = () => {
    return (
      <div className="stepTwo">
        <h3>
          <b>Step 2 : Insert your values</b>
        </h3>
        <p>You have selected a {value}, please input the required variables.</p>
        <div className="diameterContainer">
          <BasicTextFields 
            onChange={handleSubmitTextfield}
            value={valueNum}
          />
        </div>
        <div className="buttonContainer">
          <div>
            <ConfirmButton
              label="Go to step 3"
              color="primary"
              onClick={onClickStepTwoSubmit}
            />
          </div>
          <div>
            <ConfirmButton
              label="Cancel"
              color="secondary"
              onClick={handleClickCancel}
            />
          </div>
        </div>
      </div>
    );
  };

  const StepThreeComponent = () => {
    return (
      <div className="stepThree">
        <h3>
          <b>Step 3 : Your results</b>
        </h3>
        <p>
          You have calculated the area of a circle with a diameter of {valueNum}. Below
          is your result
        </p>
        <p className="diameterContainer">
          The Area is &nbsp;&nbsp;&nbsp;<b>{valueNum}</b>
        </p>
        <div className="buttonContainer">
          <div>
            <ConfirmButton
              label="Start Over"
              color="primary"
              onClick={handleClickCancel}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">Shape Calculator</header>
      <div className="contentContainer">
        <h1>Welcome to Shape Calculator</h1>
        <p>
          <b>
            Shape Calculator is an interactive web application. To the right you
            will find the 3 step application. Follow the instructions in each
            step. Clicking cancel will take you back to step 1. Enjoy!
          </b>
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas.
        </p>
      </div>
      <div className="cardContainer">
        <div className="cardContainerData">
          {(showStepOne === true ? <StepOneComponent /> : null) ||
            (showStepTwo === true ? <StepTwoComponent /> : null) ||
            (showStepThree === true ? <StepThreeComponent /> : null)}
        </div>
      </div>
    </div>
  );
}

export default App;
