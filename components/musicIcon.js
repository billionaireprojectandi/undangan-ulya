import { CSSTransition } from "react-transition-group";

function MusicIcon(props) {
  return (
    <div className="music-container">
      <div className="music-icon">
        <div
          className="music-icon-wrapper"
          onClick={() => {
            props.setPlaying(!props.playing);
          }}
        >
          <CSSTransition in={props.playing} unmountOnExit timeout={0}>
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M713 1270 c-12 -5 -119 -79 -239 -164 l-217 -156 -91 0 c-160 0 -166
-12 -166 -310 0 -298 6 -310 166 -310 l91 0 217 -155 c119 -86 228 -160 242
-165 28 -11 68 -4 101 17 42 28 53 80 53 258 0 159 1 165 20 165 32 0 95 36
123 70 49 57 57 142 21 211 -21 41 -84 89 -126 96 l-38 6 0 163 c0 177 -11
229 -53 257 -31 20 -78 28 -104 17z m57 -99 c6 -13 10 -198 10 -533 0 -414 -3
-518 -13 -532 -17 -23 2 -34 -245 144 l-202 145 0 245 0 245 212 153 c117 83
216 152 220 152 4 0 12 -9 18 -19z m-540 -531 l0 -230 -58 0 c-32 0 -63 5 -70
12 -17 17 -17 419 0 436 7 7 38 12 70 12 l58 0 0 -230z m703 76 c48 -44 48
-108 0 -152 -14 -13 -34 -24 -44 -24 -17 0 -19 9 -19 100 0 91 2 100 19 100
10 0 30 -11 44 -24z"
                />
                <path
                  d="M950 1015 c-21 -25 -6 -49 55 -83 79 -44 120 -85 153 -152 23 -47 27
-68 27 -140 0 -72 -4 -93 -27 -140 -33 -67 -74 -108 -153 -152 -51 -29 -60
-38 -60 -62 0 -46 32 -51 105 -14 295 147 306 562 19 727 -59 34 -100 39 -119
16z"
                />
              </g>
            </svg>
          </CSSTransition>
          <CSSTransition in={!props.playing} unmountOnExit timeout={0}>
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M16 1264 c-9 -8 -16 -23 -16 -32 0 -10 65 -82 145 -162 80 -80 145
-148 145 -152 0 -5 -11 -8 -24 -8 -14 0 -38 -11 -53 -24 l-28 -24 0 -220 c0
-219 0 -220 24 -246 24 -25 28 -26 146 -26 143 0 99 24 395 -214 107 -86 203
-156 212 -156 33 0 48 40 48 125 l0 80 104 -104 c92 -91 107 -103 130 -97 17
4 28 15 32 32 6 24 -44 77 -602 635 -335 335 -617 609 -626 609 -9 0 -24 -7
-32 -16z"
                />
                <path
                  d="M736 1114 l-208 -166 233 -234 c129 -129 237 -234 241 -234 5 0 8
170 8 378 0 326 -2 381 -16 400 -8 12 -23 22 -32 22 -9 0 -111 -75 -226 -166z"
                />
              </g>
            </svg>
          </CSSTransition>
        </div>
      </div>

      <style jsx>{`
        .music-container {
          width: 100vw;
          height: 100%;
          position: relative;
          z-index: 40;
        }
        .music-icon {
          position: fixed;
          top: 0;
          right: 0;
        }

        .music-icon-wrapper {
          margin: 29rem 1rem auto auto;
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          justify-content: center;
          background-color: rgba(254, 251, 243, 0.6);
          border: 2px solid rgb(153, 21, 78);
          padding: 0.35rem;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
        }

        svg {
          z-index: 40;
          animation: musicIcon 5s linear 0s infinite normal;
        }

        @keyframes musicIcon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default MusicIcon;
