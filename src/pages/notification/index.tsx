import { IoIosArrowForward } from "react-icons/io";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { useState } from "react";
import MainLayout from "@/Components/commonLayout/MainLayout";
import Henceforthapi from "../henceforthapi";
import Link from "next/link";
const Notification = () => {
  const [showToggle, setShowToggle] = useState(false);

  // handleToggle_______________________

  const handleToggle = async (modified: number) => {
    try {
      const is_notified = showToggle;
      const res = await Henceforthapi.notification({ is_notified: showToggle });
      console.log(res);
      alert(res.message);
    } catch (error) {}
    setShowToggle(!showToggle);
  };
  return (
    <>
      <MainLayout>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-secondary my-5">
                  <Link href="/account" style={{ textDecoration: "none" }}>
                    {" "}
                    My account
                  </Link>
                  <span>
                    <IoIosArrowForward />
                  </span>
                  <span>Notification Settings</span>
                </p>

                <div className="col mb-5">
                  <div className="notification">
                    <h4 className=" text-secondary">Notification Setting</h4>
                    <div className="toggle_icon">
                      {showToggle ? (
                        <FaToggleOff onClick={() => handleToggle(0)} />
                      ) : (
                        <FaToggleOn onClick={() => handleToggle(1)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
export default Notification;
