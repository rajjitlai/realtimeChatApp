import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/rj.ico"; // change the logo after the development

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event) => {};

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>waathiapp</h1>
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Create Account</button>
          <span>
            Already have an account? &nbsp;
            <Link to="/Login">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: #0e1419;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
  }
`;

export default Register;
