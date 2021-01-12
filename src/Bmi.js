import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [phrase, setPhrase] = useState(null);

  const updateHeight = (e) => {
    setHeight(e.target.value);
    setBmi(((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2));
    switch (true) {
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 0.1:
        setPhrase(null);
        break;
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 18.5:
        setPhrase("underweight");
        break;
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 24.9:
        setPhrase("normal");
        break;
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 29.9:
        setPhrase("overweight");
        break;
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 34.9:
        setPhrase("obese");
        break;
      case ((weight * 10000) / Math.pow(e.target.value, 2)).toFixed(2) < 260:
        setPhrase("very obese");
        break;
      default:
        setPhrase(null);
    }
  };

  const updateWeight = (e) => {
    setWeight(e.target.value);
    setBmi(((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2));
    switch (true) {
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 0.1:
        setPhrase(null);
        break;
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 18.5:
        setPhrase("underweight");
        break;
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 24.9:
        setPhrase("normal");
        break;
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 29.9:
        setPhrase("overweight");
        break;
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 34.9:
        setPhrase("obese");
        break;
      case ((e.target.value * 10000) / Math.pow(height, 2)).toFixed(2) < 260:
        setPhrase("very obese");
        break;
      default:
        setPhrase(null);
    }
  };

  return (
    <div className="row content text-center">
      <div className="col-12 shadow p-3 mb-5 bg-light rounded">
        <h1 className="pb-2 heading">BMI Calculator</h1>
        <div className="row no-gutters pt-1">
          <div className="col-6">
            <h5 className="pb-1">Height (in cm)</h5>
            <Form.Group className="mr-1">
              <Form.Control
                type="number"
                value={height}
                onChange={updateHeight}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <h5 className="pb-1">Weight (in kg)</h5>
            <Form.Group className="my-2 ml-1">
              <Form.Control
                type="number"
                value={weight}
                onChange={updateWeight}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-6 pr-1">
            <h5>
              {bmi < 0.01 || bmi > 260 || !isFinite(bmi)
                ? ""
                : "Your BMI is " + bmi}
            </h5>
            <h5 style={{ display: "Inline" }}>
              {" "}
              {phrase ? "This is considered to be" : null}{" "}
            </h5>
            <h5
              className={phrase + " font-weight-bold"}
              style={{ display: "Inline" }}
            >
              {phrase ? phrase : null}
            </h5>
          </div>
          <div className="col-6 pl-1">
            <div class="card card_underweight">
              <div class="card-body ">
                <b className style={{ color: "#359cbb" }}>
                  Underweight
                </b>{" "}
                | &#60; 18.5
              </div>
            </div>
            <div class="card card_normal">
              <div class="card-body">
                <b className style={{ color: "#8bca60" }}>
                  Normal
                </b>{" "}
                | 18.5 - 24.9
              </div>
            </div>
            <div class="card card_overweight">
              <div class="card-body">
                <b className style={{ color: "#c7c400" }}>
                  Overweight
                </b>{" "}
                | 25 - 29.9
              </div>
            </div>
            <div class="card card_obese">
              <div class="card-body">
                <b className style={{ color: "#f0a51a" }}>
                  Obese
                </b>{" "}
                | 30 - 34.9
              </div>
            </div>
            <div class="card card_very">
              <div class="card-body">
                <b className style={{ color: "#c41414" }}>
                  Very Obese
                </b>{" "}
                | &#62; 35
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
