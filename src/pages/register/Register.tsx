import "./register.css";
import ButtonRegister from "../../components/UI/button/ButtonRegister";
import Image from "../../components/UI/Image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgRegister from "/src/assets/imgs/login.jpg";
import { Toast } from "react-bootstrap";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  birth_date: string;
  password: string;
}

interface IErrorResponse {
  msg?: string;
}

function Register() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      // reset: true,
    });

    sr.reveal(`.inner`);
    sr.reveal(`.register-img`, { delay: 500 });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorObj, setErrorObj] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "0",
      birth_date: "",
      password: "",
    },
  });

  // Handle Submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);


    try {
      const response = await axios.post(
        "http://endlestone.com/kees/APIs/registration/signup.php",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        setShow(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setShowError(true);
      const errorObj = error as AxiosError<IErrorResponse>;
      setErrorObj(errorObj.response?.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-form">
      <div className="container-form">
        <div className="wrapper">
          <div className="inner">
            <Image
              imageURL={starsBottom}
              alt="register"
              className="register-stars"
            />
            <div className="image-holder">
              <Image
                imageURL={imgRegister}
                alt="regter img"
                className="register-img"
              />
            </div>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="register-title">Register now</h3>
              <div className="form-row">
                <div className="input-container">
                  <input
                    {...register("first_name", {
                      required: "This field is required.",
                      minLength: {
                        value: 4,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                  {errors.first_name && (
                    <div className="error-container">
                      <p className="error">{errors.first_name?.message}</p>
                    </div>
                  )}
                </div>

                <div className="input-container">
                  <input
                    {...register("last_name", {
                      required: "This field is required.",
                      minLength: {
                        value: 4,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  {errors.last_name && (
                    <div className="error-container">
                      <p className="error">{errors.last_name?.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="input-container">
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
                    className="form-control"
                    placeholder="Mail"
                  />
                  {errors.email && (
                    <div className="error-container">
                      <p className="error">{errors.email.message}</p>
                    </div>
                  )}
                </div>

                <div className="input-container">
                  <input
                    {...register("password", {
                      required: "This field is required.",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <div className="error-container">
                      <p className="error">{errors.password.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="input-container">
                  <select {...register("gender")} className="form-control">
                    <option value="0">Men</option>
                    <option value="1">Women</option>
                  </select>
                </div>

                <div className="input-container">
                  <input
                    {...register("birth_date", {
                      required: "This field is required.",
                    })}
                    className="form-control"
                    type="date"
                  />
                  {errors.birth_date && (
                    <div className="error-container">
                      <p className="error">{errors.birth_date.message}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="btn-register">
                <ButtonRegister disabled={isLoading} title="Sign Up">
                  {isLoading && <div className="spinner-border"></div>}
                </ButtonRegister>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toast
        className="toast "
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
      >
        <Toast.Body className="toastBody rounded">
          You will navigate to the login page after 2 seconds to login!
        </Toast.Body>
      </Toast>

      <Toast
        className="toast-error"
        onClose={() => setShowError(false)}
        show={showError}
        delay={3000}
        autohide
        animation
      >
        <Toast.Body className="toastBody rounded">{errorObj}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Register;
