import { useState } from "react";
import image from "../../../src/assets/img/logo.png";
import Henceforthapi from "../henceforthapi";
import Link from "next/link";
import { useRouter } from "next/router";

const otp = () => {
  const router = useRouter();
  const [otpFields, setOtpFields] = useState(["", "", "", ""]);

  const number = router.query.number;

  const changeNumber = (index: any, value: any) => {
    const newOtpFields = [...otpFields];
    newOtpFields[index] = value;
    setOtpFields(newOtpFields);
  };
  // handleOtp____________________________________

  const handleOtp = async () => {
    try {
      const mobileNumber = "yourActualMobileNumber";
      const enteredOtp = otpFields.join("");

      const postData1 = await Henceforthapi.otpVerification({
        mobile_number: mobileNumber,
        otp: enteredOtp,
      });
      alert("otp is verifyed");

      console.log(postData1, "postData1");
      router.push("/emailotp");
    } catch (error) {
      console.error("Error:", error);

      alert("Error during OTP verification");
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container_box">
                <div className="image my-3">
                  <img src={image.src} alt="" />
                </div>
                <div className="heading text-center my-3">
                  <h6>Confirm your Number</h6>
                </div>
                <div className="text text-center">
                  <p>Enter the code just sentto : </p>
                  <h6>{number}</h6>
                </div>
                <div className="number_box">
                  {otpFields.map((elem, index) => {
                    return (
                      <input
                        type="text"
                        className="input_box"
                        maxLength={1}
                        name="number"
                        value={elem}
                        onChange={(e) => changeNumber(index, e.target.value)}
                      />
                    );
                  })}
                </div>
                <div className="btn ">
                  <button className="btn btn-danger" onClick={handleOtp}>
                    submit
                  </button>
                </div>
                <div className="container_footer">
                  <p>
                    Did't get a text ?{" "}
                    <Link
                      href="/numbersignup"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Send again</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default otp;
