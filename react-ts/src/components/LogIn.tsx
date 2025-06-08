import { FaArrowLeft, musicVid_1 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./form/LogInForm";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="w-full h- flex flex-row items-center justify-center gap-10">
        {/* Image and Back Button */}
        <div className="flex flex-col gap-5">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-start justify-start relative right-25 -top-3"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="text-White text-[16px] font-semibold pl-1 -top-1 relative -mb-3">
              Back
            </span>
          </button>

          {/* Image */}
          <div className="w-[35rem] ml-10">
            <video loop autoPlay width={320} className="rounded-xl">
              <source src={musicVid_1} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* Header and Gmail form*/}
        <main className="flex flex-col gap-5 shadow-2xl w-[60rem] rounded-xl">
          <header className="flex flex-col gap-3">
            <h1 className="text-White text-[20px] font-semibold">
              Welcome Back
            </h1>
            <div className="">
              <p className="text-GrayText text-[16px] font-semibold">
                Login to access your personalized playlist and favorite tunes!
              </p>
            </div>
          </header>
          <div>
            <LoginForm />
          </div>

          {/* Don't have an account? */}
          <section className="relative -top-3">
            <div className="w-[20]">
              <p className="text-[#FFFFFF] leading-[30px] flex justify-center gap-1.5">
                Don't have an account?
                <Link to="/signupartist">
                  <span className="text-[#1403F1] font-semibold  text-[14px]">
                    Sign Up as an Artist
                  </span>
                </Link>
              </p>
            </div>

            <div className="w-[20]">
              <p className="text-[#FFFFFF] leading-[30px] flex justify-center gap-1.5">
                Don't have an account?
                <Link to="/signuplistener">
                  <span className="text-[#1403F1] font-semibold  text-[14px]">
                    Sign Up as a Listener
                  </span>
                </Link>
              </p>
            </div>
          </section>
        </main>
      </main>
    </section>
  );
};

export default LogIn;
