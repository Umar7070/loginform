import { useState } from "react";
import imagelogo from "../../../src/assets/img/logo.png";
import Henceforthapi from "../henceforthapi";

const resetpassword = () => {
  const [inputData, setInputData] = useState({
    token: "",
    password: "",
  });
  console.log(inputData);
  const { token, password } = inputData;

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInputData({ ...inputData, [name]: value });
  };

  // handleClick______________________--

  const handleClick = async () => {
    try {
      const postData1 = await Henceforthapi.resetPassword({
        password: password,
        token: token,
      });
      console.log(postData1, "postData1");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="reset_box">
                <div className="image_container">
                  <img src={imagelogo.src} alt="" />
                </div>
                <div className="reset_heading text-center my-3">
                  <h4>Reset Your Password</h4>
                </div>
                <div className="reset_feild">
                  <input
                    type="text"
                    placeholder="token "
                    name="token"
                    value={inputData.token}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="new  password"
                    value={inputData.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="reset_btn">
                  <button onClick={handleClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default resetpassword;
