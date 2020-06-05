import React from "react";

const Question = ({ question }) => {
  return (
    <div>
      <p>{question.id}</p>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          //value={checkedVal}
          //onChange={onChange}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          1
        </label>
      </div>
      <button
        type="button"
        className="btn purple d-block m-auto"
        style={{ color: "white" }}
        //onClick={nextStep}
      >
        다음으로
      </button>
    </div>
  );
};

export default Question;
