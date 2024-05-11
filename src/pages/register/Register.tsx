import { toast } from "react-toastify";
import ButtonRegister from "../../components/UI/button/ButtonRegister";
import Image from "../../components/UI/Image";
import "./register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

interface IErrorResponse {
  username: string;
  email: string;
  password: string;
  phone: string;
  error: {
    message: string;
  };
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  // console.log(watch());

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Submit
  const onSubmit = async (data: Record<string, unknown>) => {
    setIsLoading(true);
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      const { status } = await axios.post(
        "http://endlestone.com/kees/APIs/registration/signup.php",
        data
      );
      if (status === 200) {
        toast.success(
          "You will navigate to the login page after 2 seconds to login!",
          {
            position: "bottom-center",
            autoClose: 4000,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          }
        );

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      // ** 3 - Rejected  => Field => (OPTIONAL)
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.response?.data.error.message}`, {
        position: "bottom-center",
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
      console.log(data);
    }
  };

  return (
    <div className="section-form">
      <div className="container-form">
        <div className="wrapper">
          <div className="inner">
            <Image
              imageURL="src/assets/imgs/stars-bottom.png"
              alt="register"
              className="register-stars"
            />
            <div className="image-holder">
              <Image
                imageURL="src/assets/imgs/login.jpg"
                alt="regter img"
                className="register-img"
              />
            </div>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="register-title">Register now</h3>
              <div className="form-row">
                <div className="input-container">
                  <input
                    {...register("name", {
                      required: "This field is required.",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <div className="error-container">
                      <p className="error">{errors.name.message}</p>
                    </div>
                  )}
                </div>
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
              </div>
              <div className="form-row">
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
                <div className="input-container">
                  <input
                    {...register("phone", {
                      required: "This field is required.",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 characters",
                      },
                    })}
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <div className="error-container">
                      <p className="error">{errors.phone.message}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="btn-register">
                <ButtonRegister title="Sign Up" isLoading={isLoading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
