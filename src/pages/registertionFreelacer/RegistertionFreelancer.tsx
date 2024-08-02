import ButtonRegister from "../../components/UI/button/ButtonRegister";
import Image from "../../components/UI/Image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgRegister from "/src/assets/imgs/Freelancer/Register freelancer.jpg";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { diractionLang } from "../../components/utils/function";

interface IFormInput {
    name_ar: string;
    name_en: string;
    Certificate_no: string;
    professionality: string;
    contact_no: string;
    email: string;
    gender: string;
    country: string;
    city: string;
    password: string;
    Certificate_photo: string;
    logo: string;
}

interface IErrorResponse {
    msg?: string;
}

function RegistertionFreelancer() {
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
            name_ar: "",
            name_en: "",
            Certificate_no: "",
            professionality: "",
            contact_no: "",
            email: "",
            gender: "0",
            country: "",
            city: "",
            password: "",
            Certificate_photo: "",
            logo: "",
        },
    });

    // Handle Submit
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const formData = new FormData(); // {{ edit_1 }}
        formData.append("name_ar", data.name_ar);
        formData.append("name_en", data.name_en);
        formData.append("Certificate_no", data.Certificate_no);
        formData.append("professionality", data.professionality);
        formData.append("contact_no", data.contact_no);
        formData.append("email", data.email);
        formData.append("gender", data.gender);
        formData.append("country", data.country);
        formData.append("city", data.city);
        formData.append("password", data.password);
        formData.append("Certificate_photo", data.Certificate_photo[0]);
        formData.append("logo", data.logo[0]);
        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://kees90.com/kees/APIs/registration/freelancerSignup.php",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                setShow(true);
                setTimeout(() => {
                    navigate("/LoginStore");
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
                                className="register-img register-img-store"
                            />
                        </div>
                        <form
                            className="form-container"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h3 className="register-title">
                                {language === "en"
                                    ? "Register now as a freelancer"
                                    : "سجل الان كفريلانسر"}
                            </h3>
                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="name_ar"
                                    >
                                        {language === "en"
                                            ? "Arabic Name"
                                            : "الاسم بالعربية"}
                                    </label>
                                    <input
                                        {...register("name_ar", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Arabic Name"
                                                : "الاسم بالعربية"
                                        }
                                    />
                                    {errors.name_ar && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.name_ar?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="name_en"
                                    >
                                        {language === "en"
                                            ? "English Name"
                                            : "الأسم بالأنجليزية"}
                                    </label>
                                    <input
                                        {...register("name_en", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "English Name"
                                                : "الاسم بالانجليزية"
                                        }
                                    />
                                    {errors.name_en && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.name_en?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="Certificate_no"
                                    >
                                        {language === "en"
                                            ? "Certificate No"
                                            : "رقم الشهادة"}
                                    </label>
                                    <input
                                        {...register("Certificate_no", {
                                            required: "This field is required.",
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Certificate no"
                                                : "رقم الشهادة"
                                        }
                                    />
                                    {errors.Certificate_no && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.Certificate_no.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="professionality"
                                    >
                                        {language === "en"
                                            ? "Professionality"
                                            : "الإحترافية"}
                                    </label>
                                    <input
                                        {...register("professionality", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "professionality"
                                                : "الإحترافية"
                                        }
                                    />
                                    {errors.professionality && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.professionality.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="contact_no"
                                    >
                                        {language === "en"
                                            ? "Contact Number"
                                            : "رقم الاتصال"}
                                    </label>
                                    <input
                                        {...register("contact_no", {
                                            required: "This field is required.",
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "contact No"
                                                : "رقم الاتصال"
                                        }
                                    />
                                    {errors.contact_no && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.contact_no?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="email"
                                    >
                                        {language === "en"
                                            ? "Email"
                                            : "البريد الإلكتروني"}
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
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Mail"
                                                : "البريد الإلكتروني"
                                        }
                                    />
                                    {errors.email && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.email.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="gender"
                                    >
                                        {language === "en" ? "Gender" : "الجنس"}
                                    </label>
                                    <select
                                        {...register("gender")}
                                        className="form-control"
                                    >
                                        <option value="0">
                                            {language === "en" ? "Man" : "رجل"}
                                        </option>
                                        <option value="1">
                                            {" "}
                                            {language === "en"
                                                ? "Woman"
                                                : "امرأة"}
                                        </option>
                                    </select>
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="country"
                                    >
                                        {language === "en"
                                            ? "Country"
                                            : "البلد"}
                                    </label>
                                    <input
                                        {...register("country", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "country"
                                                : "البلد"
                                        }
                                    />
                                    {errors.country && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.country.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="city"
                                    >
                                        {language === "en" ? "City" : "المدينة"}
                                    </label>
                                    <input
                                        {...register("city", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "City"
                                                : "المدينة"
                                        }
                                    />
                                    {errors.city && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.city.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="password"
                                    >
                                        {language === "en"
                                            ? "Password"
                                            : "كلمة المرور"}
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        className="form-control"
                                        type="password"
                                        placeholder={
                                            language === "en"
                                                ? "Password"
                                                : "الرقم السري"
                                        }
                                    />
                                    {errors.password && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.password.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="Certificate_photo"
                                    >
                                        {language === "en"
                                            ? "Certificate photo"
                                            : "صورة الشهادة"}
                                    </label>
                                    <input
                                        {...register("Certificate_photo")}
                                        type="file"
                                        name="Certificate_photo"
                                        className="form-control photo-input"
                                        accept="image/*"
                                    />
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="logo"
                                    >
                                        {language === "en" ? "Logo" : "الشعار"}
                                    </label>
                                    <input
                                        {...register("logo")}
                                        type="file"
                                        name="logo"
                                        className="form-control photo-input"
                                        accept="image/*"
                                    />
                                </div>
                            </div>

                            <div className="btn-register">
                                <ButtonRegister
                                    disabled={isLoading}
                                    title={
                                        language === "en" ? "Sign Up" : "تسجيل"
                                    }
                                >
                                    {isLoading && (
                                        <div className="spinner-border"></div>
                                    )}
                                </ButtonRegister>

                                <Link
                                    className="signIn-link"
                                    to={"/LoginFreelancer"}
                                >
                                    <h6 className="mt-2">
                                        {language === "en"
                                            ? "Or Sign In "
                                            : "أو سجل الدخول"}
                                    </h6>
                                </Link>
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
                    You will navigate to the login page after 2 seconds to
                    login!
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
                <Toast.Body className="toastBody rounded">
                    {errorObj}
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default RegistertionFreelancer;
