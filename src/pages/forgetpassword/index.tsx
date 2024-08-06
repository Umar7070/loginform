import { useState } from "react";
import imageicon from "../../assets/img/logo.png";
import { useRouter } from "next/router";
import Henceforthapi from "../henceforthapi";
import MainLayout from "@/Components/commonLayout/MainLayout";

const forgetpassword = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  // handleClick_________________________________

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const postData1 = await Henceforthapi.forgetPassword({ email: email });
      console.log(postData1, "postData1");
    } catch (error) {
      console.error("Error:", error);
    }
    router.push("/resetpassword");
  };
  const handleEmailChange = (e: any) => {
    let email = e.target.value;
    console.log(email, "email");
    setEmail(email);
  };

  return (
    <>
    
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="forgetpassword_box">
                <div className="forgetbox_mg ">
                  <img src={imageicon.src} alt="" />
                </div>
                <div className="forget_heading my-3">
                  <h5>Forget Your Password?</h5>
                </div>
                <div className="forget_inputfeild my-2">
                  <input
                    type="email"
                    placeholder="old email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="forget_btn">
                  <button onClick={handleClick}>Send Reset Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default forgetpassword;
