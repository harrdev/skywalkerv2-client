import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../../api/auth";
import messages from "../shared/AutoDismissAlert/messages";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignIn = (event) => {
    event.preventDefault();
    console.log("the props", props);
    const { msgAlert, setUser } = props;

    const credentials = { email, password };

    signIn(credentials)
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign In Success",
          message: messages.signInSuccess,
          variant: "success",
        })
      )
      .then(() => navigate("/Dashboard"))
      .catch((error) => {
        setEmail("");
        setPassword("");
        msgAlert({
          heading: "Sign In Failed with error: " + error.message,
          message: messages.signInFailure,
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
      <div className="col-sm-10 col-md-8 mx-auto mt-5 text-center">
        <h3>Sign In</h3>
        <Form className="signon" onSubmit={onSignIn}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <h5 className="register">
          No Account? <Link to="/sign-up">Register Here</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;
