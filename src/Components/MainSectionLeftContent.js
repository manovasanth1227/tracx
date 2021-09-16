import React, { useContext } from "react";
import Context from "../Store/Store";

const MainSectionLeftContent = () => {
  const { banks } = useContext(Context);
  console.log(banks[0]);

  return (
    <div className="w-3/12 flex-col bg-green-600 max-h-full  ">
      <div className="flex-col"></div>
    </div>
  );
};

export default MainSectionLeftContent;
