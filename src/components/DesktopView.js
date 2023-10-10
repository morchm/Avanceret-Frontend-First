"use client";
import topImage from "../assets/kiryu-cover.jpg";
import Image from "next/image";
import desktopstyle from "./desktop.module.scss";
import Footer from "./Footer";
import { useState } from "react";
import Modal from "./modal";

const DesktopView = ({ data }) => {
  //---- MODAL ----
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (e) => {
    setOpen(true);
    setIndex(e.currentTarget.dataset.index);

  };

  const closeModal = () => {
    setOpen(false);

  };

  return (
    <>
      <div id={desktopstyle.topimage}>
        <Image src={topImage} alt="a picture" />
      </div>

      <div id={desktopstyle.mainHeadlineContainer}>
        {
          data.map((mdata, index) => (
            <div className={desktopstyle.headlines} key={"headline" + index}>
              <div
                className={desktopstyle.headlines}
                style={{ color: mdata.color }}
              >
                #{mdata.headline}
                <span data-index={index} onClick={openModal}>+</span>
              </div>

              <div className={desktopstyle.description}>
                {mdata.description}
              </div>
            </div>
          )) //End map
        }
      </div>

      <Footer />

      <Modal
      moreTxt={data[index].more}
      isOpen={open}
      onClose={closeModal}
      />

    </>
  );
};

export default DesktopView;
