import { WelcomePics, FaLongArrowAltRight, WallPaper, musicVid_2 } from "../assets";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="w-full flex flex-row items-center justify-between ">
        <main className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-left w-8/12 leading-[26.5px] -tracking-[2.5%] font-bold text-[#FFFFFF]">
              {" "}
              Get peer to peer feedback on Your Music.{" "}
            </h1>
            <div className="">
              <p className="text-left text-[15px] font-semibold leading-[24px] text-[#F2F2F7]">
                Artists pay to test their songs. Listeners get rewarded for
                reviews.
              </p>
            </div>
          </div>

          <div className="w-[50re] flex flex-row gap-3 ">
            <img
              src={WallPaper}
              alt="Welcome"
              className="w-[21rem] rounded-xl"
            />
            <video loop autoPlay width={255} className="rounded-xl w-[rem]">
              <source src={musicVid_2} type="video/mp4" />
            </video>
          </div>
        </main>

        <main className="flex flex-col gap-12">
          <img src={WelcomePics} alt="Welcome" className="w-[23.5rem] " />
          <div className="flex flex-col gap-1.5 items-center">
            <Link to="/signupartist">
                <Button className="w-[20rem] bg-[#1403f1] hover:bg-blue-500">
                  <div className="flex flex-row justify-around gap-5">
                    <span className="text-[#FFFFFF] text-[16px] font-semibold p-2">
                      I'm an Artist
                    </span>
                    <div className="bg-[#FFFFFF] rounded-full p-2">
                      <FaLongArrowAltRight className="text-[#1403F1]" />
                    </div>
                  </div>
                </Button>
            </Link>

            <Link to="/signuplistener">
              <Button className=" bg-[#FFFFFF] hover:bg-gray-200 w-[20rem]">
                <div className="flex flex-row justify-around gap-5">
                  <span className="text-[#1403F1] text-[16px] font-semibold p-2">
                    I'm an Listener
                  </span>
                  <div className="bg-[#1403F1] rounded-full p-2">
                    <FaLongArrowAltRight className="text-[#FFFFFF]" />
                  </div>
                </div>
              </Button>
            </Link>
            <div className="w-[20rem]">
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
      </main>
    </section>
  );
};

export default WelcomePage;
