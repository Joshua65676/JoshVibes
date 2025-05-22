import React from "react";
import { Link } from "react-router-dom";

const LatestFeedback: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full -ml-7">
      <main className="">
        <div className="flex flex-row justify-between">
          <h1 className="text-White font-semibold">Latest Feedback</h1>
          <div className="-mr-4">
            <Link to="/feedback">
              <button>
                <span className="text-SpanText font-medium underline">view all</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LatestFeedback;
