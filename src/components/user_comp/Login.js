import React from "react";
import { GoogleLogin } from '@react-oauth/google';

function Login(props) {
  let {success, error} = props;
 
  return (
    <>
      <div
        className="modal fade "
        id="login"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="login-title">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-10 d-flex flex-column align-items-center py-3">
                <GoogleLogin
              onSuccess={credentialResponse => {
              success(credentialResponse);
               }}
            onError={() => {
              error();
               }}
               />;
          
                   {/* <button className="w-100 mb-3 p-2 btn border border-2 d-flex justify-content-center align-items-center">
                    <i
                      className="fa fa-envelope-o fa-2x me-2 text-danger "
                      aria-hidden="true"
                    ></i>
                    Continue with Gmail
                  </button>  */}
                  <button className="w-100 p-2 btn border border-2 d-flex justify-content-center align-items-center">
                    <i
                      className="fa fa-facebook-square fa-2x me-2 text-primary"
                      aria-hidden="true"
                    ></i>
                    Continue with Facebook
                  </button>
                </div>
              </div>
              <hr />
              <p className="text-center">
                Don't have an account?
                <a href="#" className="text-danger">
                 SignUp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
