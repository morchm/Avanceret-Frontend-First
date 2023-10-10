"use client"; //useStates og useEffects kan kun bruges i clienter, ikke server.
import React, {useStates, useEffect, useState} from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Content = (props) => {

    const [dimensions, setDimensions] = useState(0); 

    //Fortæller, at vi vil kalde noget, når vores renderer er kørt.
    useEffect( ()=>{
        setDimensions(window.innerWidth);

        //Kaldes hver gang når vi laver en resize af skærmen
        const handleResize = ()=>{
            setDimensions(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return ()=> {
            window.removeEventListener("resize", handleResize);
        }

    }, [] );

    const breakpoint = 620; //Mobile-view

    return dimensions < breakpoint ? <MobileView /> : <DesktopView data={props.data} />;
}

export default Content;