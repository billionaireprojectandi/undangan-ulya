/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Flower from "./flower";

/* eslint-disable jsx-a11y/alt-text */
function Akad() {
  return (
    <div id="resepsi">
      <div data-aos="fade-up" className="akad container">
        <Flower />
        <div className="akad-content">
          <div className="header" data-aos="zoom-in-up">
            <p>Akad</p>
          </div>
          <div className="jam" data-aos="zoom-in-up">
            <div className="jam-header">
              <p>Pukul:</p>
            </div>
            <div>
              <p>{"09:00 - 11:00"} WIB</p>
            </div>
          </div>
          <div className="tanggal" data-aos="zoom-in-up">
            <div className="tanggal-left-section">
              <p>Minggu</p>
            </div>
            <div className="tanggal-middle-section">
              <div className="tanggal-middle-first-child">
                <p>20</p>
              </div>
              <div className="tanggal-middle-last-child">
                <p>2022</p>
              </div>
            </div>
            <div className="tanggal-right-section">
              <p>November</p>
            </div>
          </div>
          <div className="alamat" data-aos="zoom-in-up">
            <div className="alamat-header">
              <p>Lokasi Acara:</p>
            </div>
            <div className="alamat-nama">
              <p>Kediaman Mempelai Wanita</p>
            </div>
            <div className="alamat-lengkap">
              <p>
                Ds. Mangir <br /> RT 001/002 Kel. Purwogondo, Kec. Boja, Kab.
                Kendal, Jawa Tengah
              </p>
            </div>
          </div>

          {/* <div className="live-button">
            <a
              //  href="https://www.instagram.com/setyariniarum/"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/setyariniarum/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Live Stream
            </a>
          </div> */}
        </div>

        <style jsx>{`
          .akad {
            margin-bottom: 3rem;
          }
          .akad-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }

          .header {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.245rem;
            font-size: 2em;
            font-weight: bold;
          }

          .jam {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
          }

          .jam-header {
            font-weight: bold;
          }

          .tanggal {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: rgb(153, 21, 78);
          }

          .tanggal-left-section,
          .tanggal-right-section {
            font-size: 2em;
          }

          .tanggal-middle-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.125rem;
            font-weight: bold;
          }

          .tanggal-middle-first-child {
            font-size: 2em;
          }

          .alamat-header {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.245rem;
            font-size: 1.5em;
            display: flex;
            justify-content: center;

            margin: 0.5rem 0;
          }

          .alamat-nama {
            font-weight: bold;
            display: flex;
            justify-content: center;
            margin-bottom: 0.25rem;
          }

          .alamat-lengkap {
            display: flex;
            justify-content: center;
          }

          .alamat-lengkap > p {
            text-align: center;
          }

          .live-button {
            margin-top: 0.5rem;
          }

          a {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            color: black;
            text-decoration: none; /* no underline */
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Akad;
