import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class ContentRight extends Component {
   render() {
      return (
         <div style={{ position: "relative", width: "50%", margin: "auto" }}>
            <img
               style={{ width: "100%" }}
               src="./glassesImage/model.jpg"
               alt=""
            />
            {this.props.glasses && <GlassesItem glasses={this.props.glasses} />}
         </div>
      );
   }
}
