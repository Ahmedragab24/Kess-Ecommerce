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
// import { diractionLang } from "../../components/utils/function";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  birth_date: string;
  password: string;
  address: string;
  phone_number: string;
}

interface IErrorResponse {
  msg?: string;
}

function RegistertionStore() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorObj, setErrorObj] = useState<string | undefined>();
  const getLang = localStorage.getItem("lang");
  const [language, setLanguage] = useState<string | null>(getLang);

  // ScrollReveal
  useEffect(() => {
    setLanguage(getLang);
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.inner`);
    sr.reveal(`.register-img`, { delay: 500 });
  }, [getLang]);

  // React Hook Form
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
      address: "",
      phone_number: "",
    },
  });

  // Handle Submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://endlestone.com/kees/APIs/registration/signup.php",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

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
              <h3 className="register-title">
                {language === "en" ? "Register now" : "سجل الأن"}
              </h3>
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
                    placeholder={
                      language === "en" ? "First Name" : "الأسم الأول"
                    }
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
                    placeholder={
                      language === "en" ? "Last Name" : "أسم العائلة"
                    }
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
                    placeholder={
                      language === "en" ? "Mail" : "البريد الإلكتروني"
                    }
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
                    placeholder={language === "en" ? "Password" : "كلمة السر"}
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
                  <input
                    {...register("address", {
                      required: "This field is required.",
                    })}
                    type="text"
                    className="form-control"
                    placeholder={language === "en" ? "Address" : "العنوان"}
                  />
                  {errors.email && (
                    <div className="error-container">
                      <p className="error">{errors.address?.message}</p>
                    </div>
                  )}
                </div>

                <div className="input-container">
                  <input
                    {...register("phone_number", {
                      required: "This field is required.",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="number"
                    className="form-control"
                    placeholder={
                      language === "en" ? "Phone Number" : "رقم الهاتف"
                    }
                  />
                  {errors.phone_number && (
                    <div className="error-container">
                      <p className="error">{errors.phone_number.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="input-container">
                  <select {...register("gender")} className="form-control">
                    <option value="0">
                      {language === "en" ? "Man" : "رجل"}
                    </option>
                    <option value="1">
                      {" "}
                      {language === "en" ? "Woman" : "امرأة"}
                    </option>
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
                <ButtonRegister
                  disabled={isLoading}
                  title={language === "en" ? "Sign Up" : "تسجيل"}
                >
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

export default RegistertionStore;
