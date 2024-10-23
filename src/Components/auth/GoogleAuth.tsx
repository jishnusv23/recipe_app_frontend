import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const googleLogin = (credential: any) => {};
  return (
    <div className="flex items-center justify-center pt-4">
      <GoogleLogin
        onSuccess={googleLogin}
        onError={() => console.log("Something issue in OAT")}
      />
    </div>
  );
};

export default GoogleAuth;
