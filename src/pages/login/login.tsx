import { toast } from "react-toastify";
import Image from "../../components/UI/Image";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
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
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });
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
    <div className="section-form-login">
      <div className="container-form-login">
        <div className="wrapper-login">
          <div className="inner-login">
            <Image
              imageURL="src/assets/imgs/stars-bottom.png"
              alt="register"
              className="register-stars"
            />
            <div className="image-holder-login">
              <Image
                imageURL="src/assets/imgs/men/men.jpg"
                alt="login img"
                className="login-img"
              />
            </div>
            <form
              className="form-container-login "
              onSubmit={handleSubmit(onSubmit)}
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
                    {...register("password", {
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
                  {errors.password && (
                    <div className="error-container-login">
                      <p className="error-login">{errors.password.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="btn-register-login">
                <button disabled={isLoading}>login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
