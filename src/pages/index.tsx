// import image from '../../../src/assets/img/logo.png'
import Link from "next/link";
import image from "../../src/assets/img/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const index = () => {
  return (
    <>
      <section className="welcome-page">
        <div className="container main_container">
          <div className="row">
            <div className="col">
              <div className="box">
                <div className="image">
                  <img src={image.src} alt="" />
                </div>
                <div className="heading text-center my-4">
                  <h5>Welcome to App</h5>
                </div>
                <div className="grp_btn">
                  <button className="phone d-flex align-items-center bg-danger">
                    <FaPhoneAlt className="phone_icon ms-2" />
                    <span className="w-100">
                      <Link href="/signup">Continue With Phone</Link>
                    </span>
                  </button>
                  <button className="google_btn">
                    <FaGoogle className="google_icon" />
                    Continue With Google
                  </button>
                  <button className="facebook_btn">
                    <FaFacebookF className="facebook_icon" />
                    Continue With Facebook
                  </button>
                </div>

                <div className="sign_in">
                  <p>
                    You Have Already account?
                    <Link href="/signin">
                      <span className="span">Sign in</span>
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

export default index;
