import React from "react";
import styled from "styled-components";

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
            <img src="" alt="" />
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
            Already have an account? 
            {/* <Link to="/login">Login</Link> */}
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div``;

export default Register;
