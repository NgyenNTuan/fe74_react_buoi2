import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

export default class Glasses extends Component {
   render() {
      return (
         <div
            style={{
               position: "relative",
               backgroundImage: "url('./glassesImage/background.jpg')",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               height: "100%",
            }}
         >
            <div
               style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
               }}
            ></div>
            <div style={{ position: "relative", zIndex: 10 }}>
               <Header />
               <Body />
            </div>
         </div>
      );
   }
}
