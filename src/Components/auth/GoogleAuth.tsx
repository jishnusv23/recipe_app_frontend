
import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../hooks/hooks";
import { GoogleAction } from "../../redux/actions/auth/GoogleAction";

const GoogleAuth = () => {
  const dispatch=useAppDispatch()
  const googleLogin =async (credential: any) => {
  console.log("🚀 ~ file: GoogleAuth.tsx:6 ~ googleLogin ~ credential:", credential)
    try{
      const response =await dispatch(GoogleAction(credential))
      console.log("🚀 ~ file: GoogleAuth.tsx:12 ~ googleLogin ~ response:", response)
    }catch(error:any){
      console.error('Something Wrong in GoogleAuth:',error);
      
    }
  
  };
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
