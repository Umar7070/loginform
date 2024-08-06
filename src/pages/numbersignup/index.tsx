import React, { useState } from "react";
import image from "../../../src/assets/img/logo.png";
import country from "../country.json";
import Henceforthapi from "../henceforthapi";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const numbersignup = () => {
  const router = useRouter();
  const [code, setCode] = useState({
    country: "",
    number: "",
  });
  console.log(code);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(value, name);
    setCode({ ...code, [name]: value });
  };

  // handleClickEvent________________________________________

  const handleClickEvent = async () => {
    if (!code.country || !code.number) {
      toast.error("please select the country", {
        position: "top-center",
      });
    } else {
      console.log(code, "codecodecodeco");
      try {
        const postData1 = await Henceforthapi.phoneVerification({
          mobile_number: code.number,
          country_code: code.country,
        });
        if (code.number.length != 10) {
          alert("enter  10-digit number");
        } else alert(" try again");

        console.log(postData1, "postData1");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box_container">
                <div className="image my-3">
                  <img src={image.src} alt="" />
                </div>
                <div className="heading text-center my-4">
                  <h4>Sign Up</h4>
                </div>
                <div className="infut_feild">
                  <select
                    name="country"
                    id="country"
                    value={code.country}
                    onChange={handleChange}
                  >
                    {country?.map((res) => (
                      <option value={res.dial_code}>{res?.dial_code}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    name="number"
                    value={code.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="continue_btn">
                  <button onClick={handleClickEvent}>Continue</button>
                </div>
                <div className="footer">
                  <p>
                    your account already  ?
                    <span className="spain">sign in</span>
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
export default numbersignup;
