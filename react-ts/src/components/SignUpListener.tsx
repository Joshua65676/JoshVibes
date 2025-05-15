import { FaArrowLeft, musicPics_3 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import ListenerForm from "./ListenerForm";

const SignUpListener = () => {
  const navigate = useNavigate();

  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="w-full flex flex-row items-center justify-center gap-80">
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
          <div>
            <img src={musicPics_3} alt="" className="w-[24.3rem] rounded-xl" />
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-3">
            <h1 className="text-White text-[28px] font-bold">
              Join as a Listener 🎧
            </h1>
            <div>
              <p className="text-GrayText text-[16px] font-semibold">
                Listen to new music and earn by sharing your honest reviews.
              </p>
            </div>
          </header>

          {/* Form */}
          <div>
            <ListenerForm />
          </div>

          <div className="w-[20]">
            <p className="text-[#FFFFFF] leading-[30px] flex justify-center gap-1.5">
              Already have an account?
              <Link to="/login">
                <span className="text-[#1403F1] font-semibold  text-[14px]">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SignUpListener;
