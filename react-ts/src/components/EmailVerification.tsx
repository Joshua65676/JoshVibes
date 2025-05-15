import { FaArrowLeft, musicPics_1 } from "../assets";
import { useNavigate } from "react-router-dom";
import VerificationForm from "./VerificationForm";
const EmailVerification = () => {
  const navigate = useNavigate();
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="w-full flex flex-row items-center justify-center gap-10">
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
          <div className="w-[30rem]">
            <img src={musicPics_1} alt="" className="w-[20rem] rounded-xl" />
          </div>
        </div>
        {/* Header and Gmail form*/}
        <main className="flex flex-col gap-5 shadow-2xl w-[60rem] rounded-xl">
          <header className="flex flex-col gap-3">
            <h1 className="text-White text-[20px] font-semibold">Email Verification</h1>
            <div className="">
              <p className="text-GrayText text-[16px] font-semibold">
                We have sent a code to your mail <span>jo@gmail.com</span>
              </p>
            </div>
          </header>
          <div>
            <VerificationForm />
          </div>
        </main>
      </main>
    </section>
  );
};

export default EmailVerification;
