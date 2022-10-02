/* eslint-disable @next/next/no-img-element */

import { DateTime } from "luxon";
import { useState } from "react";

/* eslint-disable jsx-a11y/alt-text */
function Couple() {
  const [hari, setHari] = useState(0);
  const [jam, setJam] = useState(0);
  const [menit, setMenit] = useState(0);
  const [detik, setDetik] = useState(0);

  const timer = () => {
    const countDate = DateTime.fromFormat(
      "November 20 2022 06:30:00",
      "LLLL dd yyyy HH:mm:ss",
      {
        zone: "Asia/Jakarta",
      }
    );
    const now = DateTime.now().setZone("Asia/Jakarta");
    const gap = countDate - now;

    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    setHari(Math.floor(gap / hari));
    setJam(Math.floor((gap % hari) / jam));
    setMenit(Math.floor((gap % jam) / menit));
    setDetik(Math.floor((gap % menit) / detik));
  };

  setInterval(() => timer(), 1000);
  return (
    <div className="couple-container">
      <div className="couple">
        <div className="couple-wrapper">
          <div className="head" data-aos="fade-down" data-aos-delay="1800">
            <p>Walimatul Ursy</p>
          </div>
          <div className="couple-name">
            <div
              className="couple-name-girl"
              data-aos="fade-right"
              data-aos-delay="1800"
            >
              <p>Ulya</p>
            </div>
            <div
              className="couple-name-and"
              data-aos="zoom-in"
              data-aos-delay="1800"
            >
              <p>&</p>
            </div>
            <div
              className="couple-name-boy"
              data-aos="fade-left"
              data-aos-delay="1800"
            >
              <p>Farid</p>
            </div>
          </div>
        </div>
        <div className="count-down" data-aos="fade-up">
          <div className="container-waktu">
            <p className="waktu">{hari}</p>
            <p>Hari</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{jam}</p>
            <p>Jam</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{menit}</p>
            <p>Menit</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{detik}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .couple-container {
          height: 100vh;
          display: flex;
          justify-content: center;
        }
        .couple {
          display: flex;
          font-family: "Great Vibes", sans-serif;
          letter-spacing: 0.245rem;
          font-size: 3.25rem;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .couple-wrapper {
          width: 100%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
        }

        .couple-name {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .couple-name > * {
          letter-spacing: 0.375rem;
        }

        .event-schedule {
          font-size: 1.5rem;
        }

        .count-down {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          background-color: rgb(255, 187, 204);
          text-align: center;
          border-radius: 0.5rem;
          font-size: 1rem;
          z-index: 10;
          justify-content: center;
          font-family: "Alice", serif;
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
        }

        .waktu {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 0.15rem;
        }
      `}</style>
    </div>
  );
}

export default Couple;
