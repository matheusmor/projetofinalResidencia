import "react-native-gesture-handler";
import React from "react";

import Login from "./src/screens/Login";

import { StatusBar} from "react-native";

const Main = () => {

  return (
    <>
      <StatusBar hidden={true} />
      <Login />
    </>
  );
};

export default Main;
