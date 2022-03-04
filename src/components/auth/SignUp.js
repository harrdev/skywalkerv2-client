// import React, { Component } from 'react'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp, signIn } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const onSignUp = (event) => {
    event.preventDefault();

    const { msgAlert, setUser } = props;

    const credentials = { email, password, passwordConfirmation };

    signUp(credentials)
      .then(() => signIn(credentials))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign Up Success",
          message: messages.signUpSuccess,
          variant: "success",
        })
      )
      .then(() => navigate("/"))
      .catch((error) => {
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        msgAlert({
          heading: "Sign Up Failed with error: " + error.message,
          message: messages.signUpFailure,
          variant: "danger",
        });
      });
  };

  return (
    <div
      className="row"
      style={{
        backgroundImage:
          "url(https://lumiere-a.akamaihd.net/v1/images/victory-and-death-ahsoka_8e1a6810.jpeg?region=0%2C0%2C1280%2C544)",
        repeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="col-sm-10 col-md-8 mx-auto text-center">
        <h3>Sign Up</h3>
        <Form className="signon" onSubmit={onSignUp}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="passwordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
