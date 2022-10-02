import { useState } from "react";

function Background() {
  return (
    <div>
      <div className="background"></div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -30;
          background-color: rgba(255, 221, 204, 0.3);
          height: 100vh;
          width: 100vw;
          // background-image: url(/asset/rosegold.jpg);
          // background-position: center;
          // background-size: cover;
        }
      `}</style>
    </div>
  );
}

export default Background;
