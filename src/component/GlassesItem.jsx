import React, { Component } from "react";

export default class GlassesItem extends Component {
   render() {
      const { url } = this.props.glasses;
      return (
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
      );
   }
}
