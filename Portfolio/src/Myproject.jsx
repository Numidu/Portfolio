import React, { PureComponent } from "react";
import myproject from "../src/assets/p1.mp4";

export class Myproject extends PureComponent {
  render() {
    return (
      <div className="relative">
        <video
          className="w-full max-w-4xl rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src={myproject} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          <h1>Seneth Healing Product </h1>
        </div>
      </div>
    );
  }
}

export default Myproject;
