import React from "react";

export default function Form() {
  return (
    <div className="formFilter">
      <form className="formData">
        <div>
          <label htmlFor="organization">Organization:</label>
          <br />

          <select placeholder="select" id="">
            <option value="">organization</option>
            <option value="">business forum</option>
            <option value="">company</option>
          </select>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" />
        </div>
        <div className="formBtn">
          <button type="submit">Submit</button>
          <button className="resetBtn" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
