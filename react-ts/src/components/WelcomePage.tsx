import { WelcomePics, FaLongArrowAltRight, WallPaper } from "../assets";
import { Button } from "./ui/Button";
const WelcomePage = () => {
  return (
    <section>
      <main>
        <div>
          <h1> Get peer to peer feedback on Your Music </h1>
          <div>
            <p>
              Artists pay to test their songs. Listeners get rewarded for
              reviews.
            </p>
          </div>
        </div>

        <div>
          <img src={WelcomePics} alt="Welcome" />
        </div>

        <div>
          <Button>
            <div>
              <span>I'm an Artist</span>
              <div>
                <FaLongArrowAltRight />
              </div>
            </div>
          </Button>
          <Button>
            <div>
              <span>I'm an Listener</span>
              <div>
                <FaLongArrowAltRight />
              </div>
            </div>
          </Button>
        </div>
      </main>
    </section>
  );
};

export default WelcomePage;
