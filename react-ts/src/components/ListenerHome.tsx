// import React from 'react'
import NavbarListener from "./Navbar/NavbarListener"
import Category from "./listenerHomePage/Category"

const ListenerHome = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="flex flex-col">
        <div>
          <NavbarListener />
        </div>
        <main className="flex flex-col gap-10">
          <Category />
          {/* <LastUpload />
          <LatestFeedback /> */}
        </main>
      </main>
    </section>
  )
}

export default ListenerHome
