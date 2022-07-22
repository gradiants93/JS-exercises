import "./App.css";
import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    name: "",
    color: "",
    age: "",
    habits: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleChangeName = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      name: e.target.value,
    }));
  };
  const handleChangeColor = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      color: e.target.value,
    }));
  };
  const handleChangeAge = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      age: e.target.value,
    }));
  };
  const handleChangeHabits = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      habits: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (values.name && values.color && values.age) {
      setValid(true);
    }

    if (valid && submitted) {
      console.log(values);
    }
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Successfully Registered!</div>
        ) : null}
        <label htmlFor="name">
          {" "}
          Name*:{" "}
          <input
            id="name"
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChangeName}
          />
        </label>
        {submitted && !values.name ? (
          <span id="name-error">Please enter a name</span>
        ) : null}
        <label htmlFor="color">
          Color*:
          <select
            id="color"
            className="form-field"
            name="color"
            value={values.color}
            onChange={handleChangeColor}
          >
            <option value="" disabled hidden>
              Select color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="grey">Grey</option>
            <option value="calico">Calico</option>
            <option value="tabby">Tabby</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        {submitted && !values.color ? (
          <span id="color-error">Please select a color</span>
        ) : null}
        <label htmlFor="age">
          Age*:
          <input
            id="age"
            className="form-field"
            type="number"
            min="1"
            placeholder="Age"
            name="age"
            value={values.age}
            onChange={handleChangeAge}
          />
        </label>
        {submitted && !values.age ? (
          <span id="age-error">Please enter an age</span>
        ) : null}
        <label htmlFor="habits">
          Habits:
          <textarea
            id="habits"
            className="form-field"
            name="habits"
            rows="5"
            cols="30"
            value={values.habits}
            onChange={handleChangeHabits}
          />
        </label>
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
