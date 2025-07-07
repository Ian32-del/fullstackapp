import React, { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API_URL || "/api/message";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>React Frontend</h1>
      <p>Message From Backend: {message}</p>
    </div>
  );
}

export default App;
