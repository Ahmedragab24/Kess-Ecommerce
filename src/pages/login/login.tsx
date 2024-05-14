import Image from "../../components/UI/Image";
import axios, { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./login.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgLogin from "/src/assets/imgs/men/men.jpg";
import { Toast } from "react-bootstrap";
import "./login.css";

interface IFormInputLogin {
  email: string;
  passwd: string;
}

interface IErrorResponseLogin {
  error: {
    message?: string;
  };
}

function Login() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      // reset: true,
    });

    sr.reveal(`.inner-login`);
    sr.reveal(`.login-img`, { delay: 400 });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      passwd: "",
    },
  });
  // const navigate = useNavigate();
  const [isLoadingLog, setIsLoadingLog] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorObjLogin, setErrorObjLogin] = useState<string | undefined>();

  // Handle Submit
  const onLogin: SubmitHandler<IFormInputLogin> = async (data) => {
    setIsLoadingLog(true);
    try {
      const { status, data: resData } = await axios.post(
        "http://endlestone.com/kees/APIs/registration/login.php",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(resData);
      console.log(status);
      if (status === 200) {
        setShowLogin(true);
        localStorage.setItem("loggedInUser", JSON.stringify(resData));

        setTimeout(() => {
          location.replace("/");
        }, 2000);
      }
    } catch (error) {
      // ** 3 - Rejected  => Field => (OPTIONAL)
      setShowErrorLogin(true);
      const errorObj = error as AxiosError<IErrorResponseLogin>;
      setErrorObjLogin(errorObj.response?.data.error.message);
      console.log(errorObj.response?.data.error.message);
    } finally {
      setIsLoadingLog(false);
    }
  };

  return (
    <div className="section-form-login">
      <div className="container-form-login">
        <div className="wrapper-login">
          <div className="inner-login">
            <Image
              imageURL={starsBottom}
              alt="register"
              className="register-stars"
            />
            <div className="image-holder-login">
              <Image
                imageURL={imgLogin}
                alt="login img"
                className="login-img"
              />
            </div>
            <form
              className="form-container-login "
              onSubmit={handleSubmit(onLogin)}
            >
              <h3 className="register-title-login">Login now</h3>
              <div className="form-row-login">
                <div className="input-container-login">
                  <input
                    {...register("email", {
                      required: "This field is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                    type="email"
                    className="form-control-login"
                    placeholder="Mail"
                  />
                  {errors.email && (
                    <div className="error-container-login">
                      <p className="error-login">{errors.email.message}</p>
                    </div>
                  )}
                </div>

                <div className="input-container-login">
                  <input
                    {...register("passwd", {
                      required: "This field is required.",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control-login"
                    placeholder="Password"
                  />
                  {errors.passwd && (
                    <div className="error-container-login">
                      <p className="error-login">{errors.passwd.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="btn-register-login">
                <button disabled={isLoadingLog}>login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toast
        className="toast-login"
        onClose={() => setShowLogin(false)}
        show={showLogin}
        delay={3000}
        autohide
        animation
      >
        <Toast.Body className="toastBody rounded">
          Welcome, we are happy to have you
        </Toast.Body>
      </Toast>

      <Toast
        className="toast-error-login"
        onClose={() => setShowErrorLogin(false)}
        show={showErrorLogin}
        delay={3000}
        autohide
        animation
      >
        <Toast.Body className="toastBody rounded">{errorObjLogin}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Login;
