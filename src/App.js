import React, { useEffect, useState } from "react";
import Context from "./Store/Store";
import MainSection from "./Components/MainSection";
import SideBar from "./Components/SideBar";
import useFetch from "./CustomHooks/UseFetch";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDqjYwRmnNupvaQmvO1nc7ALHWBA_ejOjs",
  authDomain: "tracx-8c3f7.firebaseapp.com",
  databaseURL: "https://tracx-8c3f7-default-rtdb.firebaseio.com",
  projectId: "tracx-8c3f7",
  storageBucket: "tracx-8c3f7.appspot.com",
  messagingSenderId: "671447311906",
  appId: "1:671447311906:web:5e7ab0fda309a74733cc7b",
  measurementId: "G-HYCCH1JD99",
};
initializeApp(firebaseConfig);

function App() {
  const [banks, setBanks] = useState([]);
  const [loading, sendRequest, error] = useFetch();

  function getBanks(data) {
    if (data != null) {
      const bankData = [];
      for (let key in data) {
        bankData.push({ ...data[key], id: key });
      }
      if (bankData != null) {
        setBanks(bankData);
      }
    }
  }

  function getUser(user) {}
  useEffect(
    function () {
      sendRequest(
        {
          url: "https://tracx-8c3f7-default-rtdb.firebaseio.com/Bank.json",
          method: "GET",
          Headers: {
            "Content-Type": "application/json",
          },
        },
        getBanks
      );
      sendRequest(
        {
          url: "https://tracx-8c3f7-default-rtdb.firebaseio.com/User.json",
          method: "GET",
          Headers: {
            "Content-Type": "application/json",
          },
        },
        getUser
      );
    },
    [sendRequest]
  );

  return (
    <Context.Provider value={{ banks }}>
      <div className="flex">
        <SideBar />
        <MainSection />
      </div>
    </Context.Provider>
  );
}

export default App;
