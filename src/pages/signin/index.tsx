import { useState } from "react";
import image from "../../../src/assets/img/logo.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Henceforthapi from "../henceforthapi";
import { Router, useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const welcomeuser = () => {
  const router = useRouter();
  const [showIcons, setShowIcons] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  // iconHandle_____________________________________

  const iconHandle = () => {
    setShowIcons(!showIcons);
  };

  // handleChange______________________________________________

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  // handleSubmit________________________________________

  const handleSubmit = async () => {
    if (!user.email || !password) {
      alert("please fill the form");
    }
    try {
      const postData1 = await Henceforthapi.loginAccount({ email, password });
      console.log(postData1, "postData1");
      setCookie(this, "token", postData1?.token);
      toast.success(postData1?.message, {
        position: "top-center",
      });
      router.push("/account");
    } catch (error) {
      console.error("Error:", error);
      toast.error("please try again", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="welcm_user_box">
                <div className="wlcm_img">
                  <img src={image.src} alt="" />
                </div>
                <div className="wlcm_heading my-4">
                  <FaLongArrowAltLeft className="arrow_left" />
                  <h4>Sign In</h4>
                </div>
                <div className="user_feild">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <span>
                    <MdEmail className="email_icons" />
                  </span>
                  <input
                    type={showIcons ? "password" : "text"}
                    placeholder="password"
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                  />
                  {showIcons ? (
                    <span>
                      <IoIosEye
                        className="password_icons"
                        onClick={iconHandle}
                      />
                    </span>
                  ) : (
                    <span>
                      <IoIosEyeOff
                        className="password_icons"
                        onClick={iconHandle}
                      />
                    </span>
                  )}
                </div>
                <div className="password">
                  <Link href="/forgetpassword">
                    <p>Forget Password</p>
                  </Link>
                </div>
                <div className="user_btn">
                  <button onClick={handleSubmit}>Sign in</button>
                </div>
                <div className="user_footer">
                  <p>
                    Dont'have any account ?
                    <Link href="/signup">
                      <span>Sign Up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default welcomeuser;
