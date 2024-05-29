import "./profilePage.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import ButtonRegister from "../../UI/button/ButtonRegister";
import { Toast } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  address: string;
  birth_date: string;
  password: string;
  photo?: string;
  job?: string;
}

interface IErrorResponse {
  msg?: string;
}

interface UserProfileProps {
  userData: {
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    birth_date: string;
    password: string;
    address: string;
    phone_number: string;
    photo?: string;
    job?: string;
  };
}

function Profile({ userData }: UserProfileProps) {
  const [fileImg, setFileImg] = useState<string | undefined>(
    "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFileImg(URL.createObjectURL(e.target.files[0]));
    }
  }

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
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorObj, setErrorObj] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      gender: userData.gender,
      birth_date: userData.birth_date,
      password: userData.password,
      address: userData.address,
      phone_number: userData.phone_number,
      photo: userData.photo,
      job: userData.job,
    },
  });

  // Handle Submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);

    // console.log(data);

    try {
      const response = await axios.post(
        "https://endlestone.com/kees/APIs/registration/updateProfile.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        setShow(true);
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
    <div className="container profile rounded  mt-5 mb-5">
      <div className="profile-dev container row d-flex justify-content-center  m-auto">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center mt-2 p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={fileImg}
              alt="Profile Avatar"
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                {...register("photo")}
                onChange={handleChange}
                type="file"
              />
            </Button>
            <span className="font-weight-bold mt-3">{userData.first_name}</span>
            <span className="text-black-50">{userData.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="register-title">Edit Profile</h3>
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
                    {...register("address", {
                      required: "This field is required.",
                      minLength: {
                        value: 4,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                  {errors.address && (
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
                        value: 4,
                        message: "Minimum 6 characters",
                      },
                    })}
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  {errors.phone_number && (
                    <div className="error-container">
                      <p className="error">{errors.phone_number?.message}</p>
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

              <div className="form-row">
                <div className="input-container">
                  <input
                    {...register("job")}
                    className="form-control"
                    type="text"
                    placeholder="Job"
                  />
                </div>
              </div>

              <div className="btn-register">
                <ButtonRegister disabled={isLoading} title="Save Profile">
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

export default Profile;
