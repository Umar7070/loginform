import img from "../../../src/assets/img/logo.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Henceforthapi from "../henceforthapi";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signupverification = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // handleInput_________________________________

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setInputValue({ ...inputValue, [name]: value });
  };

  const nameValidation = (value: any) => {
    const nameRegex = /^[A-Za-z]{4,}$/;
    if (value.length === 0) {
      return "Name is required";
    }
    if (!nameRegex.test(value)) {
      return "Please enter a name with at least 4 letters and no spaces, numbers, or special characters.";
    }
    return "";
  };

  const emailValidation = (email: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (email.length === 0) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email address. Please enter a valid email.";
    }
    return "";
  };

  const passwordValidation = (password: any) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@_!#$%^&*()<>?/\|}{~:])[A-Za-z0-9@_!#$%^&*()<>?/\|}{~:]{8,}$/;
    if (password.length === 0) {
      return "password in required";
    }
    if (!passwordRegex.test(password)) {
      return "Password should be 8 characters or longer and include an uppercase letter, a number, and a special character   ";
    }
    return "";
  };
  // handleSubmit    _____________________________________
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const nameValidationError = nameValidation(inputValue?.name);
    const emailValidationError = emailValidation(inputValue?.email);
    const passwordValidationError = passwordValidation(inputValue?.password);
    setValidationError({
      ...validationError,
      nameError: nameValidationError,
      emailError: emailValidationError,
      passwordError: passwordValidationError,
    });
    const data = {
      email: inputValue.email,
      password: inputValue.password,
      mobile_number: 0,
      country_code: "string",
      device_type: 1,
      device_id: "string",
      fcm_id: "string",
    };

    try {
      const postData1 = await Henceforthapi.singup(data);

      setCookie(null, "token", postData1);
      alert("signup successfully");
    } catch (error) {
      console.error("Error:", "error????????????");
      alert("please try again");
    }
      router.push("/numbersignup");

  };

  //   handleShow_____________________________________

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <form
                className="form_container"
                action="submit"
                onSubmit={handleSubmit}
              >
                <div className="img_container">
                  <img src={img.src} alt="" />
                </div>
                <div className="form_heading my-3">
                  <Link href="/">
                    <FaLongArrowAltLeft className="left_arrow" />
                  </Link>
                  <h6>Sign Up</h6>
                </div>
                <div className="inpu_feild">
                  <div className="input_aline">
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      value={inputValue.name}
                      onChange={handleInput}
                      
                    />
                    <span>
                      <FaUser className="user" />
                    </span>
                    {validationError?.nameError && (
                      <p className="errorText">{validationError?.nameError}</p>
                    )}
                  </div>
                  <div className="input_aline">
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      value={inputValue.email}
                      onChange={handleInput}
                    />
                    <span>
                      <MdEmail className="email" />
                    </span>
                    {validationError?.emailError && (
                      <p className="errorText">{validationError?.emailError}</p>
                    )}
                  </div>
                  <div className="input_aline">
                    <input
                      placeholder="password"
                      name="password"
                      value={inputValue.password}
                      onChange={handleInput}
                      type={showPassword ? "text" : "password"}
                    />
                    <span>
                      {showPassword ? (
                        <IoEye className="icons_eye" onClick={handleShow} />
                      ) : (
                        <IoEyeOff className="icons_eye" onClick={handleShow} />
                      )}
                    </span>
                    {validationError?.passwordError && (
                      <p className="errorText">
                        {validationError?.passwordError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="chec_box">
                  <input type="checkbox" />
                  <p>
                    by clicking create account your agree to the
                    <span>term of service</span>and <span>Private policy</span>
                  </p>
                </div>
                <div className="form_btn">
                  <button
                    className="w-100"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </div>
                <div className="form_footer my-3">
                  <p>
                    you have already account ?   <Link href='/signin' style={{ textDecoration: 'none' }}><span>Sign in</span></Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
export default Signupverification;
