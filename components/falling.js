function Falling() {
  return (
    <div className="fall-wrapper">
      <div className="set">
        <div>
          <img src="/asset/flower_1.png" />
        </div>
        <div>
          <img src="/asset/flower_2.png" />
        </div>
        <div>
          <img src="/asset/flower_2.png" />
        </div>
        <div>
          <img src="/asset/flower_3.png" />
        </div>
        <div>
          <img src="/asset/flower_4.png" />
        </div>
        <div>
          <img src="/asset/flower_4.png" />
        </div>
        <div>
          <img src="/asset/flower_5.png" />
        </div>
        <div>
          <img src="/asset/flower_6.png" />
        </div>
      </div>
      <div className="set set2">
        <div>
          <img src="/asset/flower_2.png" />
        </div>
        <div>
          <img src="/asset/flower_3.png" />
        </div>
        <div>
          <img src="/asset/flower_1.png" />
        </div>
        <div>
          <img src="/asset/flower_2.png" />
        </div>
        <div>
          <img src="/asset/flower_4.png" />
        </div>
        <div>
          <img src="/asset/flower_6.png" />
        </div>
        <div>
          <img src="/asset/flower_4.png" />
        </div>
        <div>
          <img src="/asset/flower_5.png" />
        </div>
      </div>
      <style jsx>{`
        .set {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 45;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .set div {
          position: absolute;
          display: block;
        }

        .set div:nth-child(1) {
          left: 20%;
          animation: animate 15s linear -7s infinite alternate;
        }
        .set div:nth-child(2) {
          left: 50%;
          animation: animate 20s linear 5s infinite alternate;
        }
        .set div:nth-child(3) {
          left: 70%;
          animation: animate 20s linear 0s infinite alternate;
        }
        .set div:nth-child(4) {
          left: 0%;
          animation: animate 20s linear -5s infinite alternate;
        }
        .set div:nth-child(5) {
          left: 85%;
          animation: animate 18s linear -10s infinite alternate;
        }
        .set div:nth-child(6) {
          left: 0%;
          animation: animate 12s linear 0s infinite alternate;
        }
        .set div:nth-child(7) {
          left: 15%;
          animation: animate 14s linear 0s infinite alternate;
        }
        .set div:nth-child(8) {
          left: 60%;
          animation: animate 15s linear 0s infinite alternate;
        }

        img {
          width: 4rem;
        }

        .set2 div img {
          transform: scale(2) rotateX(180deg) translateX(50px) translateY(20px);
        }

        @keyframes animate {
          0% {
            opacity: 0;
            top: -10%;
            transform: translateX(20px) rotate(0deg);
          }

          10% {
            opacity: 1;
          }

          20% {
            transform: translateX(-20px) rotate(45deg);
          }

          40% {
            transform: translateX(-20px) rotate(90deg);
          }

          40% {
            transform: translateX(20px) rotate(100deg);
          }
          60% {
            transform: translateX(20px) rotate(180deg);
          }
          80% {
            transform: translateX(-20px) rotate(180deg);
          }
          100% {
            top: 110%;
            transform: translateX(-20px) rotate(225deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Falling;
