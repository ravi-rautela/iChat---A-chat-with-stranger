import React from "react";
import LeftSection from "./HomeSection/LeftSection";
import RightSection from "./HomeSection/RightSection";
import Signup from "./page/Signup";
import Login from "./page/Login";

const App = () => {
  return (
    <>
      <div className="flex h-screen">
        <LeftSection />
        <RightSection />
      </div>

      {/* <Signup /> */}
      {/* <Login /> */}
    </>
  );
};

export default App;
