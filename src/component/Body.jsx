import React, { Component } from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import ContentBottom from "./ContentBottom";

export default class Body extends Component {
   data = [
      {
         id: 1,
         price: 30,
         name: "GUCCI G8850U",
         url: "./glassesImage/v1.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 2,
         price: 50,
         name: "GUCCI G8759H",
         url: "./glassesImage/v2.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 3,
         price: 30,
         name: "DIOR D6700HQ",
         url: "./glassesImage/v3.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 4,
         price: 70,
         name: "DIOR D6005U",
         url: "./glassesImage/v4.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 5,
         price: 40,
         name: "PRADA P8750",
         url: "./glassesImage/v5.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 6,
         price: 60,
         name: "PRADA P9700",
         url: "./glassesImage/v6.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 7,
         price: 80,
         name: "FENDI F8750",
         url: "./glassesImage/v7.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 8,
         price: 100,
         name: "FENDI F8500",
         url: "./glassesImage/v8.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
         id: 9,
         price: 60,
         name: "FENDI F4300",
         url: "./glassesImage/v9.png",
         desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
   ];

   state = {
      selectedGlasses: null,
   };

   handleSelectGlasses = (gla) => {
      this.setState({
         selectedGlasses: gla,
      });
   };

   render() {
      return (
         <div className="container">
            <div className="row pt-4 pb-4">
               <div className="col-6">
                  {this.state.selectedGlasses && (
                     <ContentLeft glasses={this.state.selectedGlasses} />
                  )}
               </div>
               <div className="col-6">
                  <ContentRight glasses={this.state.selectedGlasses} />
               </div>
            </div>
            <div className="row pb-5">
               <ContentBottom
                  data={this.data}
                  onSelectedGlasses={this.handleSelectGlasses}
               />
            </div>
         </div>
      );
   }
}
