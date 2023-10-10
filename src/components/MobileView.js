"use client";
import topImage from "../assets/majima.jpg";
import Image from "next/image";
import mobilestyle from "./mobile.module.scss";
import Footer from "./Footer";
import { useState } from "react";

const MobileView = ({ data }) => {
  return (
    <>
      <div id={mobilestyle.topimage}>
        <Image src={topImage} alt="a picture" />
      </div>

      <div id={mobilestyle.mainHeadlineContainer}>
        <div>#ABOUT</div>

        <div>#WHAT</div>
        
        <div>#CONTACT</div>
      </div>

      <Footer />
    </>
  );
};

export default MobileView;
