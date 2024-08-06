import { parseCookies, setCookie } from "nookies";
import request from "superagent";

const apiUrl = "http://139.59.47.49:4004/api/";

const tokenPlugin = (req: any) => {
  // debugger
  let getCookies = parseCookies(null, "token");
  console.log(getCookies?.token, getCookies);
  req.set("Authorization", `${getCookies?.token}`);
};

const singup = async (data: object) => {
  try {
   
      let response =  await request.post(`${apiUrl}account/register`).send(data)
      const token = response.body.token;
      console.log("token...........", token);
      setCookie(null, "accessToken", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      return response.body;
     } catch (error) {
       console.log("error in registor", error)
     }
    }


const phoneVerification = async (data: object) => {
  try {
    const getCookies = parseCookies();

    const token = getCookies?.token;

    if (!token) {
      throw new Error("Token not found in cookies");
    }

    const response = await request
      .post(`${apiUrl}account/send/otp`)
      .use(tokenPlugin)
      .send(data);
    return response.body;
  } catch (error) {
    return error;
    throw error;
  }
};

const otpVerification = async (data: any) => {
  try {
    const response = await request
      .post(`${apiUrl}account/verify/otp`)
      .use(tokenPlugin)
      .send(data);
    return response.body;
  } catch (error) {
    // return error
    throw error;
  }
};

const uploadImage = async (data: any) => {
  try {
    const formData = new FormData();
    formData.append("file", data); 

    const response = await request
      .post(`${apiUrl}upload/image`)
      .use(tokenPlugin)
      .send(formData);

    if (response && response.body) {
      return response.body; 
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    throw error;
  }
};


const forgetPassword = async (data: any) => {
  try {
    const response = await request
      .post(`${apiUrl}account/forgot/password`)
      .send(data);
    return response.body;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (data: any) => {
  try {
    const response = await request
      .post(`${apiUrl}account/reset/password`)
      .send(data);
    return response.body;
  } catch (error) {
    throw error;
  }
};

const getProfile = async (data: any) => {
  try {
    const response = await request
      .post(`${apiUrl}upload/image`)
      .use(tokenPlugin)
      .attach("file", data);
  } catch (error) {
    throw error;
  }
};

const loginAccount = async (data: any) => {
  try {
    const response = await request.post(`${apiUrl}account/login`).send(data);
    return response.body;
  } catch (error) {
    throw error;
  }
};

const ChangePassword = async (data: any) => {
  const getCookies = parseCookies();

  const token = getCookies?.token;
  debugger
  console.log('receid data',data)
  if (!token) {
    throw new Error("Token not found in cookies");
  }
  try {
    const response = await request
      .put(`${apiUrl}account/change/password`)
      .send(data)
      .use(tokenPlugin)
    return response.body;
  } catch (error) {
    throw error;
  }
};


const editProfile = async (data: any) => {
  try {

    const response = await request
      .put(`${apiUrl}edit-profile`)
      .use(tokenPlugin)
      .send(data);

    if (response && response.body) {
      return response.body; 
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    throw error;
  }
};


const notification = async (is_notified: any) => {
  try {
    const res = await request.put(`${apiUrl}setting`).send(is_notified).use(tokenPlugin);
    return res.body;
  } catch (error) {
    console.log('error', error);
  }
};
const Henceforthapi = {
  singup,
  phoneVerification,
  otpVerification,
  uploadImage,
  forgetPassword,
  resetPassword,
  getProfile,
  ChangePassword,
  loginAccount,
  editProfile,
  notification
  
};

export default Henceforthapi;
