import React from "react";
import Greeting from "./Greeting";
import MainSectionLeftContent from "./MainSectionLeftContent";
import MainSectionMiddleContent from "./MainSectionMiddleContent";
import MainSectionRightContent from "./MainSectionRightContent";

const MainSection = () => {
  return (
    <div className="bg-yellow-600   min-h-screen w-full ">
      <Greeting />
      <div className="flex" style={{ height: "90%" }}>
        <MainSectionLeftContent />
        <MainSectionMiddleContent />
        <MainSectionRightContent />
      </div>
    </div>
  );
};

export default MainSection;
