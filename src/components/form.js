import { useState } from "react";
const Form = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value
    }));
  };
  

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name:{" "}
          <input type="text" value={state.fname} onChange={handleChange} />
        </label>
        <label>
          Last Name:{" "}
          <input type="text" value={state.lname} onChange={handleChange} />
        </label>
        <label>
        Your Message:
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
        Is Checked?
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
    </form>
      <h5>Name: {state.fname} {state.lname}</h5>
      <p>Message: {state.message}</p>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender : {state.gender}</h5>
    </>
  );
  
};
export default Form;
