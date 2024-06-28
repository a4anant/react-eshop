import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            //const user = userCredential.user;
            navigate('/');
          })
          .catch((error) => {
            //const errorCode = error.code;
            //console.log(errorCode);
            //const errorMessage = error.message;
            alert('User does not exists with these details Or user has been disable by admin!');
          });
    }

    const registerAccount = (e) => {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //const user = userCredential.user;
          if(userCredential) {
            navigate('/');
          }
        })
        .catch((error) => {
          //const errorCode = error.code;
          //console.log(errorCode);
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }

  return (
    <div className="container-fluid col-6 mx-auto mt-5 login__bg p-3">
      <ul className="nav nav-pills nav-justified mb-3" id="login-register-page" role="tablist">
        <li className="nav-item" role="presentation">          
          <button 
            className="nav-link active" 
            id="tab-login" 
            data-bs-toggle="tab" 
            data-bs-target="#pills-login" 
            type="button" 
            role="tab" 
            aria-controls="pills-login" 
            aria-selected="true"
            >
                Login
            </button>
        </li>
        <li className="nav-item" role="presentation">          
          <button 
            className="nav-link" 
            id="tab-register" 
            data-bs-toggle="tab" 
            data-bs-target="#pills-register" 
            type="button" 
            role="tab" 
            aria-controls="pills-register" 
            aria-selected="false"
            >
                Register
            </button>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="loginName" onChange={e => setEmail(e.target.value)} className="form-control" />
              <label className="form-label" htmlFor="loginName">
                Email or username
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="loginPassword" onChange={e => setPassword(e.target.value)} className="form-control" />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>           

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" htmlFor="registerUsername">
                Username
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="registerEmail" onChange={e => setEmail(e.target.value)} className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
                onChange={e => setPassword(e.target.value)}
              />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-3"
              onClick={registerAccount}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login