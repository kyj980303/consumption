import React, { useState } from "react";
import { authService, firebaseInstance } from "\bfbase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  const onSubmit = async (event) => {
    event.prventDefault();
    try {
      let data;
      if (!newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <form className="loginForm" onSubmit={onSubmit}>
        <input
          className="login"
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={onChange}
          required
        />
        <input
          className="login"
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={onChange}
          required
        />
        {error && <span className="authError">{error}</span>}
        <input
          type="submit"
          className="loginbtn"
          value={newAccount ? "LogIn" : "Create Account"}
          required
        />
        <div className="socialLogin">
          <button name="google" onClick={onSocialClick}>
            Continue with Google
          </button>
          <button name="github" onClick={onSocialClick}>
            Continue with GitHub
          </button>
        </div>
        <span onClick={toggleAccount} className="create">
          {newAccount ? "Create Account" : "LogIn"}
        </span>
      </form>
    </>
  );
};

export default AuthForm;
