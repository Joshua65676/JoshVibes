import type React from "react";
import NavbarListener from "./Navbar/NavbarListener";
import Category from "./listenerHomePage/Category";
import NewRelease from "./listenerHomePage/NewRelease";
import SongControl from "./control/SongControl";

const ListenerHome: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="flex flex-col">
        <div>
          <NavbarListener />
        </div>
        <main className="flex flex-col gap-10">
          <Category />
          <NewRelease />
          {/* <LastUpload />
            <LatestFeedback /> */}
        </main>
        {/* <SongControl /> */}
        <footer>
          <SongControl />
        </footer>
      </main>
    </section>
  );
};

export default ListenerHome;
