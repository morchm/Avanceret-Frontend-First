import Link from "next/link";
import styles from "./page.module.css";
import Content from "@/components/Content";
import DesktopView from "@/components/DesktopView";
import MobileView from "@/components/MobileView";

export default function Page() {
  const myData = [
    {
      headline: "ABOUT",
      title: "ABOUT",
      color: "#0F528C",
      description: "Description of about",
      more: "more text to about"
    },
    {
      headline: "WHAT",
      title: "WHAT",
      color: "#2182BF",
      description: " Description of what ",
      more: "more text to what"
    },
    {
      headline: "CONTACT",
      title: "CONTACT",
      color: "#D9AD29",
      description: " Description of contact",
      more: "more text to contact"
    },
  ];

  return (
    <main>
      <>
        <Content data = {myData}/>
      </>
    </main>
  );
}
