import "./registertionStore.css";
import ButtonRegister from "../../components/UI/button/ButtonRegister";
import Image from "../../components/UI/Image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgRegister from "/src/assets/imgs/Store/Register page.jpg";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { diractionLang } from "../../components/utils/function";

interface IFormInput {
    store_name: string;
    real_store_name: string;
    login_name: string;
    certificate_No: string;
    phone_No: string;
    contact_No: string;
    email: string;
    commercial_Activity: string;
    store_link: string;
    instagram_Link: string;
    store_location: string;
    password: string;
    photo: string;
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

        sr.reveal(`.wrapper `);
        sr.reveal(`.register-img`, { delay: 500 });
    }, [getLang]);

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: {
            store_name: "",
            real_store_name: "",
            login_name: "",
            certificate_No: "",
            phone_No: "",
            contact_No: "",
            email: "",
            commercial_Activity: "",
            store_link: "",
            instagram_Link: "",
            store_location: "",
            password: "",
            photo: "",
        },
    });

    // Handle Submit
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const formData = new FormData(); // {{ edit_1 }}
        formData.append("store_name", data.store_name);
        formData.append("real_store_name", data.real_store_name);
        formData.append("login_name", data.login_name);
        formData.append("certificate_No", data.certificate_No);
        formData.append("phone_No", data.phone_No);
        formData.append("contact_No", data.contact_No);
        formData.append("email", data.email);
        formData.append("commercial_Activity", data.commercial_Activity);
        formData.append("store_link", data.store_link);
        formData.append("instagram_Link", data.instagram_Link);
        formData.append("store_location", data.store_location);
        formData.append("password", data.password);
        formData.append("photo", data.photo[0]);
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://kees90.com/kees/APIs/registration/storeSignup.php",
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
                                    ? "Register now as a store owner"
                                    : "سجل الان كصاحب متجر"}
                            </h3>
                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="store_name"
                                    >
                                        {language === "en"
                                            ? "Store Name"
                                            : "أسم المتجر"}
                                    </label>
                                    <input
                                        {...register("store_name", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 4 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Store Name"
                                                : "أسم المتجر"
                                        }
                                    />
                                    {errors.store_name && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.store_name?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="real_store_name"
                                    >
                                        {language === "en"
                                            ? "Real Store Name"
                                            : "أسم المتجر الحقيقي"}
                                    </label>
                                    <input
                                        {...register("real_store_name", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 4 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Real Store Name"
                                                : "اسم_المتجر_الحقيقي"
                                        }
                                    />
                                    {errors.real_store_name && (
                                        <div className="error-container">
                                            <p className="error">
                                                {
                                                    errors.real_store_name
                                                        ?.message
                                                }
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="login_name"
                                    >
                                        {language === "en"
                                            ? "Login Name"
                                            : "أسم المستخدم"}
                                    </label>
                                    <input
                                        {...register("login_name", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 4 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Login Name"
                                                : "أسم المتجر"
                                        }
                                    />
                                    {errors.login_name && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.login_name?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="certificate_No"
                                    >
                                        {language === "en"
                                            ? "Certificate No"
                                            : "رقم الشهادة"}
                                    </label>
                                    <input
                                        {...register("certificate_No", {
                                            required: "This field is required.",
                                        })}
                                        type="number"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Certificate No."
                                                : "شهادة رقم"
                                        }
                                    />
                                    {errors.certificate_No && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.certificate_No?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="phone_No"
                                    >
                                        {language === "en"
                                            ? "Phone"
                                            : "رقم الهاتف"}
                                    </label>
                                    <input
                                        {...register("phone_No", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        type="number"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Phone"
                                                : "رقم الهاتف"
                                        }
                                    />
                                    {errors.phone_No && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.phone_No?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="contact_No"
                                    >
                                        {language === "en"
                                            ? "contact Number"
                                            : "رقم الاتصال"}
                                    </label>
                                    <input
                                        {...register("contact_No", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Contact"
                                                : "رقم التواصل"
                                        }
                                    />
                                    {errors.contact_No && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.contact_No?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="email"
                                    >
                                        {language === "en"
                                            ? "email"
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

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="password"
                                    >
                                        {language === "en"
                                            ? "password"
                                            : "كلمة السر"}
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        type="password"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Password"
                                                : "كلمة السر"
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
                                        htmlFor="store_location"
                                    >
                                        {language === "en"
                                            ? "Store Location"
                                            : "موقع المتجر"}
                                    </label>
                                    <input
                                        {...register("store_location", {
                                            required: "This field is required.",
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Store Location"
                                                : "العنوان"
                                        }
                                    />
                                    {errors.store_location && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.store_location?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="commercial_Activity"
                                    >
                                        {language === "en"
                                            ? "Commercial Activity"
                                            : "النشاط التجاري"}
                                    </label>
                                    <input
                                        {...register("commercial_Activity", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 6 characters",
                                            },
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "commercial_Activity"
                                                : "النشاط التجاري"
                                        }
                                    />
                                    {errors.commercial_Activity && (
                                        <div className="error-container">
                                            <p className="error">
                                                {
                                                    errors.commercial_Activity
                                                        .message
                                                }
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="store_link"
                                    >
                                        {language === "en"
                                            ? "Store Link"
                                            : "رابط المتجر"}
                                    </label>
                                    <input
                                        {...register("store_link", {
                                            required: "This field is required.",
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Store Link"
                                                : "رابط المتجر"
                                        }
                                    />
                                    {errors.store_link && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.store_link?.message}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="instagram_Link"
                                    >
                                        {language === "en"
                                            ? "Instagram Link"
                                            : "رابط الانستقرام"}
                                    </label>
                                    <input
                                        {...register("instagram_Link", {
                                            required: "This field is required.",
                                        })}
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            language === "en"
                                                ? "Instagram Link"
                                                : "رابط الانستجرام"
                                        }
                                    />
                                    {errors.instagram_Link && (
                                        <div className="error-container">
                                            <p className="error">
                                                {errors.instagram_Link.message}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-container">
                                    <label
                                        className="LabelInput"
                                        htmlFor="photo"
                                    >
                                        {language === "en"
                                            ? "Photo Of The Store"
                                            : "صورة للمتجر"}
                                    </label>
                                    <input
                                        {...register("photo")}
                                        type="file"
                                        name="photo"
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
                                    to={"/LoginStore"}
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
                    You will navigate to the Login Dashboard page after 2
                    seconds to login!
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

export default RegistertionStore;
