import React from "react";
import LeftSection from "./HomeSection/LeftSection";
import RightSection from "./HomeSection/RightSection";

const App = () => {
  return (
    <>
      <div className="flex h-screen">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
};

export default App;
