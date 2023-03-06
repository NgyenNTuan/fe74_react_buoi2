import React, { Component } from "react";

export default class ContentLeft extends Component {
   render() {
      const { name, url, desc } = this.props.glasses;
      return (
         <div style={{ position: "relative", width: "50%", margin: "auto" }}>
            <img
               style={{ width: "100%" }}
               src="./glassesImage/model.jpg"
               alt=""
            />
            <img
               style={{
                  position: "absolute",
                  width: "60%",
                  left: "20%",
                  top: "24%",
               }}
               src={url}
               alt=""
            />
            <div
               style={{
                  position: "absolute",
                  bottom: 0,
                  textAlign: "left",
                  paddingLeft: 10,
                  backgroundColor: "rgba(253, 189, 143, 0.5)",
               }}
            >
               <h3 className="text-primary">{name}</h3>
               <p>{desc}</p>
            </div>
         </div>
      );
   }
}
