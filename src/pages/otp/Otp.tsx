import "./opt.css";
import Logo from "../../assets/imgs/Logo (NO TEXT).png";
import intlTelInput from "intl-tel-input";
import "../../../node_modules/intl-tel-input/build/css/intlTelInput.min.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Otp() {
  useEffect(() => {
    const input = document.querySelector("#phone") as HTMLInputElement | null;
    if (input) {
      intlTelInput(input, {
        utilsScript: "path/to/utils.js",
      });
    }
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      // reset: true,
    });

    sr.reveal(`.otp-page`, { delay: 500 });
  }, []);

  return (
    <div className="container otp-page">
      <div className="container containerOTP">
        <form className=" otp-form">
          <div className="image-container">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "50px", marginBottom: "20px" }}
            />
          </div>
          <h3 className="register-title-login">OTP Verification</h3>

          <div className="form-group">
            <label className="EnterNumber" htmlFor="phone number">
              Enter your phone number:
            </label>
            <input id="phone" type="number" name="phone" />
          </div>

          {/* <!-- OTP Input Field --> */}
          <div className="otp-container">
            <input type="text" className="otp-input" maxLength={1} />
            <input type="text" className="otp-input" maxLength={1} />
            <input type="text" className="otp-input" maxLength={1} />
            <input type="text" className="otp-input" maxLength={1} />
            <input type="text" className="otp-input" maxLength={1} />
            <input type="text" className="otp-input" maxLength={1} />
          </div>

          <button className="otp-btn">
            Verify <i className="fas fa-check-circle"></i>
          </button>

          <small>
            You didn't send the code ?{" "}
            <a href="otp.html" style={{ textDecoration: "underline" }}>
              <span style={{ fontWeight: "normal" }}>resend again!</span>
            </a>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Otp;
