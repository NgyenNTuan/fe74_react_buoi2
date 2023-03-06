import React, { Component } from "react";

export default class Header extends Component {
   render() {
      return (
         <div
            style={{
               backgroundColor: "rgba(0,0,0,0.5)",
               paddingTop: 20,
               paddingBottom: 20,
            }}
         >
            <h2 className="text-white">TRY GLASSES APP ONLINE</h2>
         </div>
      );
   }
}
