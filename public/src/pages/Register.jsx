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
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          {/* <label htmlFor="password">Confirm Password</label> */}
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
  align-items: center;
  background-color: #0e1419;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #fff;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: rgb(36 32 40 / 46%);
    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #00fdea;
      border-radius: 0.4rem;
      color: #fff;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #38ff42;
        outline: none;
      }
    }

    button {
      background-color: #00fdea;
      padding: 1rem 2rem;
      cursor: pointer;
      color: #000;
      border: none;
      font-weight: 700;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #38ff42;
      }
    }

    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #38ff42;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
`;

export default Register;
