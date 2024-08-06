import { useState } from "react";
import signupimg from "../../../src/assets/img/logo.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Henceforthapi from "../henceforthapi";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = () => {
  const route = useRouter();
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  console.log(image, "khjshdg?????????///");
  

  // handleImage_______________________________

  const handleImage = (e: any) => {
    if(e.target.files){
      setImage(e.target.files[0]);
    }
    console.log(e.target.files);
  };

  // handleChange_____________________________

  const handleChange = async () => {
    try {
      const postImage = await Henceforthapi.uploadImage(image);
      console.log("uplded image???????????", postImage);
      setUploadImage(postImage.filename);
      alert("image uploaded");
    } catch (error) {
      console.error("Error during image upload:", error);
      toast.error("Image upload failed");
    }
    route.push('/signin')
  };



  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="signup_box">
                <div className="signup_img">
                  <img src={signupimg.src} alt="" />
                </div>
                <div className="finishing_heading">
                  <FaLongArrowAltLeft className="arrow_icon" />
                  <h5>Finish Signing Up</h5>
                </div>
                <div className="token">
                  <p>step 3 of 3</p>
                </div>
                <div className="circle">
                  {image && <img src={URL.createObjectURL(image)} alt="Uploaded"  />}
                </div>
                <div className="img_upload">
                  <input type="file" name="file" onChange={handleImage} />
                </div>
                <div className="signUp_btn">
                  <button onClick={handleChange}>Upload</button>
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

export default ImageUpload;
