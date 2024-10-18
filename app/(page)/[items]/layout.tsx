"use client";
import Header from "@/app/(components)/Header/Header";
import React, { useState } from "react";
import ItemsContainer from "./components/ItemsContainer";
import { Reciept } from "@/app/context/Reciept";

const layout = () => {
  const [recieptNumber, setRecieptNumber] = useState<any>([]);
  return (
    <>
      <Reciept.Provider value={{ recieptNumber, setRecieptNumber }}>
        <Header />
        <ItemsContainer />
      </Reciept.Provider>
    </>
  );
};

export default layout;
