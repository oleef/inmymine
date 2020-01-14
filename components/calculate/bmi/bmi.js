import React, { Component, Fragment, useState } from "react";
import Card from "../../card/card";
import { isNumber } from "lodash";
import BMIIndicator from "./bmi_indicator";
const BMI = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [invalidInput, setInvalidInput] = useState(false);

  const BMICalculate = () => {
    if (
      height !== undefined &&
      height !== "" &&
      weight !== undefined &&
      weight !== ""
    ) {
      setInvalidInput(false);

      const value = parseFloat(
        parseFloat(weight) /
          parseFloat(parseFloat(parseFloat(height) / 100) * 2)
      );
      setBmi(value.toFixed(2));
    } else {
      setInvalidInput(true);
    }
  };

  const handleOnchange = e => {
    let value;
    if (e.target.value == "") {
      value = "";
      if (e.target.id == "height") {
        setHeight(value);
      } else {
        setWeight(value);
      }
    } else {
      if (e.target.value.length <= 6) {
        value = Number(e.target.value);
        if (e.target.id == "height") {
          setHeight(value);
        } else {
          setWeight(value);
        }
      }
    }
  };
  return (
    <Fragment>
      <Card className="col-12" title="ค่าดัชนีมวลกาย (BMI)" withHeader={true}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="number"
                id="height"
                className="form-control"
                placeholder="ส่วนสูง (cm)"
                value={height}
                maxLength="6"
                onChange={e => handleOnchange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="weight"
                min="1"
                max="500"
                className="form-control"
                placeholder="น้ำหนัก (kg)"
                value={weight}
                onChange={e => handleOnchange(e)}
              />
            </div>
            {invalidInput ? (
              <p className="text-danger">กรุณากรอกข้อมูลให้ครบถ้วน</p>
            ) : null}
            <hr />
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => BMICalculate()}
            >
              คำนวณ
            </button>
          </div>
          <div className="col"></div>
          <div className="col-4">
            <div class="alert alert-success text-center">
              <h1>{bmi}</h1>
              <hr />
              <h5>BMI</h5>
            </div>
          </div>
        </div>
      </Card>
      <BMIIndicator></BMIIndicator>
    </Fragment>
  );
};
export default BMI;
