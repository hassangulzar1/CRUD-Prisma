"use client";
import React from "react";
export function Delete(props) {
  const [loading, setLoading] = React.useState(false);

  const deleteHandler = async (id) => {
    try {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        id: id,
      });

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch("http://localhost:3000/api/user", requestOptions);
      const succMess = await res.json();
      return alert(succMess.message);
    } catch (error) {
      return alert("error: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={() => deleteHandler(props.id)}>
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}

export function Update(props) {
  return <button>{props.children}</button>;
}
