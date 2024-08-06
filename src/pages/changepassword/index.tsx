import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Henceforthapi from "../henceforthapi";
import { IoEyeOutline, IoEyeSharp } from "react-icons/io5";
import MainLayout from "@/Components/commonLayout/MainLayout";
import Link from "next/link";

const ChangePassword = () => {
  const [showIcon, setShowIcon] = useState(true);

  const [hideIcon, setHideIcon] = useState(true);

  const [inputDataChange, setinputDataChange] = useState({
    old_password: "",
    new_password: "",
  });

  const { old_password, new_password } = inputDataChange;


  // showHandle________________________________________

  const showHandle = () => {
    setShowIcon(!showIcon);
  };

  // hideHandle______________________________________________

  const hideHandle = () => {
    setHideIcon(!hideIcon);
  };

  // handleChange___________________________________

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setinputDataChange({ ...inputDataChange, [name]: value });
  };

  // handleSubmit_____________________________________________

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(old_password===new_password){
      alert('you can not change same password ')
      return false;
    }
    try {
      const postData1 = await Henceforthapi.ChangePassword({
        old_password,
        new_password,
      });
      console.log(postData1, "ummmaaarrrr");
      alert(postData1.message);
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    }
  };
  return (
    <>
      <MainLayout>
        <section className="passwordChange-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8  mt-5 p-3 ">
                <div className="top_text ms-5">
                 <Link href='/account' style={{ textDecoration: 'none' }}> <p className="text-secondary">
                    My Account <IoIosArrowForward />
                  </p></Link>
                  <p>Change Password</p>
                </div>
                <h3 className="ms-5 text-primary">Change Password</h3>
                <form onSubmit={handleSubmit} className="border">
                  <div className="container-form ms-4">
                    <label htmlFor="">Old Password</label>
                    <input
                      className="mt-2 ps-3"
                      type={showIcon ? "password" : "text"}
                      name="old_password"
                      value={inputDataChange.old_password}
                      onChange={handleChange}
                      placeholder="Entewr Old Passsword "
                    />
                    {showIcon ? (
                      <IoEyeOutline className="closeEye" onClick={showHandle} />
                    ) : (
                      <IoEyeSharp onClick={showHandle} className="closeEye" />
                    )}
                  </div>
                  <div className="container-form ms-4">
                    <label htmlFor="">New Password</label>
                    <input
                      type={hideIcon ? "text" : "password"}
                      className="mt-2 ps-3"
                      name="new_password"
                      value={inputDataChange.new_password}
                      onChange={handleChange}
                      placeholder=" Enter New Password"
                    />

                    {hideIcon ? (
                      <IoEyeOutline className="openEye" onClick={hideHandle} />
                    ) : (
                      <IoEyeSharp onClick={hideHandle} className="openEye" />
                    )}

                    <div className="form-btn">
                      <button type="submit">Update Password</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
export default ChangePassword;
