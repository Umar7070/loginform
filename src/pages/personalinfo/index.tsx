import { FaAngleRight } from "react-icons/fa";
import codeCountry from "../country.json";
import profileImage from "../../assets/img/person.png";
import { useContext, useState } from "react";
import MainLayout from "@/Components/commonLayout/MainLayout";
import Henceforthapi from "../henceforthapi";
import { MyContext } from "@/Components/MyContext";
import Link from "next/link";
import { Input, Modal } from "antd";
import ModalExample from "../modal";
import { IoCheckmarkOutline } from "react-icons/io5";
import request from "superagent";

const PersonalInfo = ({ }) => {
  const [otp, setOtp] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState();
  const { inputData } = useContext(MyContext);
  const [cancle, setCancle] = useState(true);
  const [handleToogle, setHandleToogle] = useState(false);
  const [togleLocation, setTogleLocation] = useState(false);
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState(inputData?.first_name);
  const [email, setEmail] = useState(inputData?.email);

  const [togleEmail, setTogleEmail] = useState(false);
  const [numberTogle, setNumberTogle] = useState(false);

  const [location, setLocation] = useState(inputData.address);
  const [number, setNumber] = useState(inputData.mobile_number);
  const [imageUrl, setImageUrl] = useState(""); 
  // handleImage____________________________________________

  const handleImage = (e:any) => {
    if (e.target.files) {
      setUploadImage(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]); // Create URL for preview
      setImageUrl(imageUrl); // Set image URL to state
    }
  };

  // submitImageHandler  _____________________________________

  const submitImageHandler = async () => {
    try {
      const postImage = await Henceforthapi.uploadImage(uploadImage);
      console.log("uplded image???????????", postImage);
      setUploadImage(postImage.filename);
      alert("image uploaded");
    } catch (error) {
      alert("Error during image upload:");
      alert("Image upload failed");
    }
    // route.push("/signin");
  };

  // handleName___________________________________

  const handleCancle = () => {
    setHandleToogle(!handleToogle);
  };

  // handleSetEdit________________________________________

  const handleEdit = () => {
    setHandleToogle(!handleToogle);
  };

  // handleEditProfile____________________________

  const handleEditProfile = async (e: any) => {
    
    try {
      const res = await Henceforthapi.editProfile({
        first_name: name,
        email: email,
        mobile_number: number,
        address: location,
      });
      alert("profile updated");
      // setEdit(true)
      setName(name);
      setEmail(email);
      setLocation(location);
      setNumber(number);
      console.log(res);
      setHandleToogle(true);
    } catch (error) {
      alert("please try again");
    }
  };

  const getotp = `${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}`;
  console.log(getotp);

  // handleOtep ____________________________________
  const handleOtep = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setOtp({ ...otp, [name]: value });
    console.log(otp);
  };

  return (
    <>
      <MainLayout>
        <section>
          <div className="container my-3">
            <div className="row">
              <div className="col-md-8">
                <Link href="/account" className="links">
                  <p className="text-secondary">
                    My account
                    <span>
                      <FaAngleRight />
                    </span>
                    <span>Personal Info</span>
                  </p>
                </Link>

                <div className="form-box border px-4">
                  <div className="label d-flex ">
                    <label htmlFor="" className="ms-4">
                      Name
                    </label>
                    {handleToogle ? (
                      <button
                        className="btn btn-danger "
                        onClick={handleCancle}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button onClick={handleEdit} className="btn btn-danger">
                        Edit
                      </button>
                    )}
                  </div>
                  {handleToogle ? (
                    <div className="">{name}</div>
                  ) : (
                    <>
                      <div className="form_feild ">
                        <input
                          type="text"
                          placeholder="jonas borther"
                          className="input"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-butn mb-3">
                        <button
                          className="btn btn-success ms-4 mt-3"
                          onClick={() => handleEditProfile(name)}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <br />
                <div className="form-box border px-4">
                  <div className="label d-flex ">
                    <label htmlFor="" className="ms-4">
                      Location
                    </label>
                    {togleLocation ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => setTogleLocation(false)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => setTogleLocation(true)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  {togleLocation ? (
                    <div className="">{location}</div>
                  ) : (
                    <>
                      <div className="form_feild">
                        <input
                          type="text"
                          placeholder="jonas borther"
                          className="input"
                          value={location}
                          name="location"
                          onChange={(e) => setLocation(e.target.value)}

                        // value={email}
                        />
                      </div>
                      <div className="form-butn mb-3">
                        <button
                          className="btn btn-success ms-4 mt-3"
                          onClick={handleEditProfile}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <br />

                <div className="form-box border px-4">
                  <div className="label d-flex  ">
                    <label htmlFor="" className="ms-4">
                      Email
                    </label>
                    {togleEmail ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => setTogleEmail(false)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => setTogleEmail(true)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  {togleEmail ? (
                    <div className="">{email}</div>
                  ) : (
                    <>
                      <div className="form_feild">
                        <input
                          type="email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jonas borther@gmail.com"
                          className="input"
                        />
                      </div>
                      <div className="form-butn mb-3">
                        <button
                          className="btn btn-success ms-4 mt-3"
                          onClick={handleEditProfile}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <br />

                <div className="form-box border px-4">
                  <div className="label d-flex  ">
                    <label htmlFor="" className="ms-4">
                      Mobile Number
                    </label>
                    {numberTogle ? (
                      <button
                        className="btn btn-danger "
                        onClick={() => setNumberTogle(false)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger ms-4 mt-3"
                        onClick={() => setNumberTogle(true)}
                      >
                        edit
                      </button>
                    )}
                  </div>
                  {numberTogle ? (
                    <div className="">{number}</div>
                  ) : (
                    <>
                      <div className="form_feild d-flex flex-column gap-3">
                        <select name="country" id="country ">
                          {codeCountry?.map((res) => (
                            <option value={res.dial_code}>
                              {res?.dial_code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="number"
                        value={number}
                        placeholder="8176837301"
                        className="my-3"
                      />
                      <button
                        className="btn btn-success my-2"
                        // onClick={showModal}
                        onClick={handleEditProfile}
                      >
                        verified
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="profile_image">
                  {/* {uploadImage && (
                    <img
                      src={URL.createObjectURL(uploadImage)}
                      alt="Uploaded"
                    />
                  )} */}
                    {imageUrl && <img src={imageUrl} alt="Uploaded" />} 
                </div>
                <input type="file" name="file" onChange={handleImage} />

                <div className="upload_btn text-center my-3">
                  <button
                    className="btn btn-danger"
                    onClick={submitImageHandler}
                  >
                    upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>

      <Modal
        footer={false}
        title="Confirm your number"
        className="text-center"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="text-center">Enter the code just sent to</p>

        <div className="no_box">
          <input
            type="text"
            onChange={handleOtep}
            value={otp.digit1}
            name="digit1"
          />
          <input
            type="text"
            onChange={handleOtep}
            value={otp.digit2}
            name="digit2"
          />
          <input
            type="text"
            onChange={handleOtep}
            value={otp.digit3}
            name="digit3"
          />
          <input
            type="text"
            onChange={handleOtep}
            value={otp.digit4}
            name="digit4"
          />
        </div>
        <p className="text-center my-4">
          Did't get a text <span>Send again</span>
        </p>
        <Link href="/">
          <p>Login in another way</p>
        </Link>
        <button className="btn btn-primary" onClick={showModal}>
          verify otp
        </button>
      </Modal>
      <Modal>modal</Modal>

      <Modal
        footer={false}
        title="Verified number"
        className="text-center"
        open={isModalOpen1}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <IoCheckmarkOutline className="outline" />
        <p>
          Your Number <span>+91:- 8176837301 is verified</span>
        </p>
        <Link href="/signup">
          <p className="text-danger">Go To Home</p>
        </Link>
      </Modal>
    </>
  );
};

export default PersonalInfo;
