import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Bmi = ({ submit }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [date, setDate] = useState("");
  const [phrase, setPhrase] = useState(null);

  const updateHeight = (e) => {
    const newDate = new Date().toLocaleString().split(",")[0];
    setDate(newDate);
    if (e.target.value > 999) {
      setHeight(999);
      setBmi(((weight * 10000) / Math.pow(999, 2)).toFixed(2));
      switch (true) {
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 0.1:
          setPhrase(null);
          break;
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 18.5:
          setPhrase("underweight");
          break;
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 24.9:
          setPhrase("normal");
          break;
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 29.9:
          setPhrase("overweight");
          break;
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 34.9:
          setPhrase("obese");
          break;
        case ((weight * 10000) / Math.pow(999, 2)).toFixed(2) < 260:
          setPhrase("very obese");
          break;
        default:
          setPhrase(null);
      }
    } else {
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
    }
  };

  const updateWeight = (e) => {
    const newDate = new Date().toLocaleString().split(",")[0];
    setDate(newDate);
    if (e.target.value > 999) {
      setWeight(999);
      setBmi(((999 * 10000) / Math.pow(height, 2)).toFixed(2));
      switch (true) {
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 0.1:
          setPhrase(null);
          break;
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 18.5:
          setPhrase("underweight");
          break;
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 24.9:
          setPhrase("normal");
          break;
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 29.9:
          setPhrase("overweight");
          break;
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 34.9:
          setPhrase("obese");
          break;
        case ((999 * 10000) / Math.pow(height, 2)).toFixed(2) < 260:
          setPhrase("very obese");
          break;
        default:
          setPhrase(null);
      }
    } else {
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
    }
  };

  const onSubmit = () => {
    submit({ date, height, weight, bmi, phrase });
  };

  return (
    <div className="col-12 shadow py-2 bg-light rounded">
      <h1 className="pb-2 heading text-center">BMI Tracker</h1>
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
            Your BMI is {"  "}
            {bmi < 0.01 || bmi > 260 || !isFinite(bmi) ? "" : bmi}
          </h5>
          <h5 style={{ display: "Inline" }}>This BMI falls under{"  "}</h5>
          <h5
            className={phrase + " font-weight-bold"}
            style={{ display: "Inline" }}
          >
            {phrase ? phrase : null}
          </h5>
          <br />
          {phrase ? (
            <Button
              className="mt-2 mb-1"
              variant="primary"
              type="submit"
              onClick={onSubmit}
            >
              Log{" "}
            </Button>
          ) : (
            <Button
              className="mt-2 mb-1"
              variant="primary"
              type="submit"
              onClick={onSubmit}
              disabled
            >
              Log{" "}
            </Button>
          )}
          <br />
          <small>The 10 most recent logs will be stored</small>
        </div>
        <div className="col-6 pl-1 pb-2 text-center">
          <div class="card card_underweight">
            <div class="p-1">
              <b className style={{ color: "#359cbb" }}>
                Underweight
              </b>{" "}
              | &#60; 18.5
            </div>
          </div>
          <div class="card card_normal">
            <div class="p-1">
              <b className style={{ color: "#8bca60" }}>
                Normal
              </b>{" "}
              | 18.5 - 24.9
            </div>
          </div>
          <div class="card card_overweight">
            <div class="p-1">
              <b className style={{ color: "#c7c400" }}>
                Overweight
              </b>{" "}
              | 25 - 29.9
            </div>
          </div>
          <div class="card card_obese">
            <div class="p-1">
              <b className style={{ color: "#f0a51a" }}>
                Obese
              </b>{" "}
              | 30 - 34.9
            </div>
          </div>
          <div class="card card_very">
            <div class="p-1">
              <b className style={{ color: "#c41414" }}>
                Very Obese
              </b>{" "}
              | &#62; 35
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
