import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/submit", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });

      const data = await response.text();

      alert(data);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Error connecting to server");

    }

  };

  return (

    <div className="main-container">

      <div className="left-section">

        <div className="overlay"></div>

        <div className="content">

          <img src={logo} alt="logo" className="logo" />

          <h1>
            Together We Can Change
            <span> THE WORLD</span>
          </h1>

          <p>
            She Can Foundation is a youth-driven NGO creating opportunities,
            awareness, education, and positive social impact through community
            initiatives and digital empowerment.
          </p>

        </div>

      </div>

      <div className="right-section">

        <div className="form-box">

          <h2>Join Us</h2>

          <form className="form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit</button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default App;