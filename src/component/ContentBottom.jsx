import React, { Component } from "react";
import "./contentBottom.css";

export default class ContentBottom extends Component {
   render() {
      return (
         <div className="container content-bottom">
            {this.props.data.map((item, i) => {
               return (
                  <button
                     className="btn btn-light"
                     onClick={() => {
                        this.props.onSelectedGlasses(item);
                     }}
                  >
                     <img
                        className="imgBtn"
                        src={`./glassesImage/g${i}.jpg`}
                        alt=""
                     />
                  </button>
               );
            })}
         </div>
      );
   }
}
