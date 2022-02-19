import React, { useState } from "react";
import "./SimpleCalculator.css";

const SimpleCalculator = () => {
  const [result, setResult] = useState("");

  const onClickbtn = (e) => {
    if (result.length < 20) {
      setResult(result.concat(e.target.name));
    }
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const displayResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="heading">
        <h1>* Calculator *</h1>
        <div className="calc_container">
          <div className="form_container">
            <form>
              <input type="text" value={result} className="input_text" />
            </form>
            <button onClick={backspace} id="backspace">
              C
            </button>
            <button onClick={clear} className="clear_btn" id="clear">
              AC
            </button>
          </div>
          <div className="keypad">
            <div className="divide_row">
              <button name="1" className="one_1" onClick={onClickbtn}>
                1
              </button>
              <button name="2" className="two_2" onClick={onClickbtn}>
                2
              </button>
              <button name="3" className="three_3" onClick={onClickbtn}>
                3
              </button>
              <button name="/" className="divide" onClick={onClickbtn}>
                &divide;
              </button>
            </div>
            <div className="minus_row">
              <button name="4" className="four_4" onClick={onClickbtn}>
                4
              </button>
              <button name="5" className="five_5" onClick={onClickbtn}>
                5
              </button>
              <button name="6" className="six_6" onClick={onClickbtn}>
                6
              </button>
              <button name="-" className="minus" onClick={onClickbtn}>
                &ndash;
              </button>
            </div>
            <div className="plus_row">
              <button name="7" className="seven_7" onClick={onClickbtn}>
                7
              </button>
              <button name="8" className="eight_8" onClick={onClickbtn}>
                8
              </button>
              <button name="9" className="nine_9" onClick={onClickbtn}>
                9
              </button>
              <button name="+" className="plus" onClick={onClickbtn}>
                +
              </button>
            </div>
            <div className="multiply_row">
              <button name="0" className="zero_0" onClick={onClickbtn}>
                0
              </button>
              <button name="." className="dot" onClick={onClickbtn}>
                .
              </button>
              <button
                onClick={displayResult}
                id="result"
                className="equal_sign"
              >
                =
              </button>

              <button name="*" className="multiply" onClick={onClickbtn}>
                *
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleCalculator;
