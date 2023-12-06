"use client";
import React, { useState } from "react";

const initialStata = {
  name: "",
  email: "",
  age: "",
  sallary: 0,
};

export default function Form() {
  const [data, setdata] = useState(initialStata);
  const [loading, setloading] = useState(false);

  const inputChangeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        name: "hassan",
        email: "hs89133@gmail.com",
        age: "233",
        sallary: 2343,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/user", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {}
  };

  return (
    <form autocomplete="off" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={inputChangeHandler} required />
      </div>
      <div>
        <label for="email">email</label>
        <input
          type="text"
          name="email"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div>
        <label for="salary">Age</label>
        <input type="text" name="age" onChange={inputChangeHandler} required />
      </div>
      <div>
        <label for="city">Sallary</label>
        <input
          type="number"
          name="sallary"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className="form_action--button">
        <input type="submit" />
      </div>
    </form>
  );
}
