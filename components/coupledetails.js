import { useRouter } from "next/router";
import Flower from "./flower";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function CoupleDetails(props) {
  const router = useRouter();
  const { bpk } = router.query;
  return (
    <div id="couple">
      <div className="couple container" data-aos="fade-up">
        <Flower />
        <div className="couple-image" data-aos="zoom-in-up">
          <img src="/asset/couple.jpg" alt="couple.jpg" />
          <img src="/asset/frame_flower.png" alt="frame_flower.png" />
        </div>
        <div className="couple-name">
          <div className="couple-name-girl" data-aos="zoom-in-up">
            <div className="girl-name">
              <p>Ulya Rofiqul Mawaddah</p>
            </div>
            <div data-aos="zoom-in-up">
              <p>Putri dari</p>
            </div>
            <div className="couple-parent" data-aos="zoom-in-up">
              {bpk ? <p>Bapak {bpk}</p> : <p>Bapak Edy Rofiquddin</p>}
              <p>dan</p>
              <p>Ibu Setyaningsih</p>
            </div>
          </div>
          <div style={{ fontSize: "2em" }} data-aos="zoom-in-up">
            <p>&</p>
          </div>
          <div className="couple-name-boy">
            <div className="boy-name" data-aos="zoom-in-up">
              <p>Farid Ridwan</p>
            </div>
            <div data-aos="zoom-in-up">
              <p>Putra dari</p>
            </div>
            <div className="couple-parent" data-aos="zoom-in-up">
              <p>Bapak Moh. Zainuddin</p>
              <p>dan</p>
              <p>Ibu Yuniwati (Alm)</p>
            </div>
          </div>
          {/* <div className="love-story">
            <div
              className="love-story-button"
              onClick={() => props.setDisplayLoveStory(true)}
            >
              <p>Love Story</p>
            </div>
          </div> */}
        </div>

        <style jsx>{`
          .couple {
            margin-bottom: 3rem;
          }

          .couple-image {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.8rem 1rem;
            position: relative;
            flex-direction: column;
          }

          .couple-image > img {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
          }

          .couple-image > img:nth-child(2) {
            position: absolute;
            bottom: -1rem;
            width: 80%;
          }

          .couple-name {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .couple-name-girl,
          .couple-name-boy {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
          }

          .girl-name > p,
          .boy-name > p {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.2rem;
            font-size: 2em;
            font-weight: bold;
            text-align: center;
          }

          .couple-parent {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.1em;
            font-weight: bold;
          }

          .love-story-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CoupleDetails;
