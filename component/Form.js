"use client";
import React, { useState } from "react";

const initialStata = {
  name: "",
  email: "",
  age: "",
  sallary: "",
};

export default function Form() {
  const [data, setdata] = useState(initialStata);
  const [loading, setloading] = useState(false);

  const inputChangeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify(data);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch("http://localhost:3000/api/user", requestOptions);
      if (!res.ok) {
        throw new Error("error");
      }
      setdata(initialStata);

      const successMess = await res.json();
      return alert(successMess.message);
    } catch (error) {
      alert("error:", error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={data.name}
          type="text"
          name="name"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          value={data.email}
          type="text"
          name="email"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          value={data.age}
          type="text"
          name="age"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="sallary">Sallary</label>
        <input
          value={data.sallary}
          type="number"
          name="sallary"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className="form_action--button">
        <button disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
