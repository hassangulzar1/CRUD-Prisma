import React from "react";

export default function Form() {
  return (
    <form autocomplete="off">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="email">email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label for="salary">Age</label>
        <input type="text" name="salary" />
      </div>
      <div>
        <label for="city">Sallary</label>
        <input type="number" name="sallary" />
      </div>
      <div className="form_action--button">
        <input type="submit" />
      </div>
    </form>
  );
}
