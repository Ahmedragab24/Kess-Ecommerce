import Image from "../../components/UI/Image";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./login.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgLogin from "/src/assets/imgs/login page.jpg";
import { Toast } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// import { diractionLang } from "../../components/utils/function";

interface IFormInputLogin {
    email: string;
    passwd: string;
}

interface IErrorResponseLogin {
    msg?: string;
}

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showErrorLogin, setShowErrorLogin] = useState(false);
    const [errorObjLogin, setErrorObjLogin] = useState<string | undefined>();
    // const navigate = useNavigate();
    const getLang = localStorage.getItem("lang");
    const [language, setLanguage] = useState<string | null>(getLang);

    // ScrollReveal
    useEffect(() => {
        setLanguage(getLang);
        // diractionLang();
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 300,
        });

        sr.reveal(`.inner-login`);
        sr.reveal(`.login-img`, { delay: 400 });
    }, [getLang]);

    // React Hook Form
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

    // Handle Submit
    const onLogin: SubmitHandler<IFormInputLogin> = async (data) => {
        setIsLoading(true);
        try {
            const { status, data: resData } = await axios.post(
                "https://kees90.com/kees/APIs/registration/login.php",
                data,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            if (status === 200) {
                setShowLogin(true);

                setTimeout(() => {
                    // navigate("/");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);

                    localStorage.setItem("User", JSON.stringify(resData));
                }, 2000);
            }
        } catch (error) {
            setShowErrorLogin(true);
            const errorObj = error as AxiosError<IErrorResponseLogin>;
            setErrorObjLogin(errorObj.response?.data.msg);
        } finally {
            setIsLoading(false);
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
                            <h3 className="register-title-login">
                                {language === "en"
                                    ? "Login now"
                                    : "تسجيل الدخول الأن"}
                            </h3>
                            <div className="form-row-login">
                                <div className="input-container-login">
                                    <label
                                        className="LabelInput"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "This field is required.",
                                            pattern: {
                                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                message:
                                                    "Please enter a valid email address.",
                                            },
                                        })}
                                        type="email"
                                        className="form-control-login"
                                        placeholder={
                                            language === "en"
                                                ? "Email"
                                                : "البريد الإلكتروني"
                                        }
                                    />
                                    {errors.email && (
                                        <div className="error-container-login">
                                            <p className="error-login">
                                                {errors.email.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container-login">
                                    <label
                                        className="LabelInput"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        {...register("passwd", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        type="password"
                                        className="form-control-login"
                                        placeholder={
                                            language === "en"
                                                ? "Password"
                                                : "كلمة السر"
                                        }
                                    />
                                    {errors.passwd && (
                                        <div className="error-container-login">
                                            <p className="error-login">
                                                {errors.passwd.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="btn-register-login">
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    sx={{
                                        borderColor: "var(--three-color)",
                                        color: "var(--three-color)",
                                        "&:hover": {
                                            backgroundColor:
                                                "var(--three-color)",
                                            color: "var(--second-color)",
                                        },
                                    }}
                                    disabled={isLoading}
                                >
                                    {language === "en"
                                        ? "Login"
                                        : "تسجيل الدخول"}
                                </Button>
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
                <Toast.Body className="toastBody rounded">
                    {errorObjLogin}
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default Login;
