import image from "../../assets/img/success.png";
import { TiTick } from "react-icons/ti";
import { useRouter } from "next/router";

const emailverification = () => {
  const router = useRouter();

  const uploadImage = () => {
    router.push("/imageuplod");
  };
  return (
    <>
      <section className="email-verificatio">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="emailverifi_box">
                <div className="image_success">
                  <TiTick className="stick" />
                </div>
                <h3>your otp is verified </h3>
                <button className="my-4 btn btn-danger" onClick={uploadImage}>
                  upload image
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default emailverification;
