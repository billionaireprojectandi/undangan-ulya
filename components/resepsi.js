/* eslint-disable @next/next/no-img-element */
import Flower from "./flower";
import "aos/dist/aos.css";

/* eslint-disable jsx-a11y/alt-text */

function Resepsi() {
  return (
    <div className="resepsi container" data-aos="fade-up">
      <Flower />
      <div className="resepsi-content">
        <div className="header" data-aos="zoom-in-up">
          <p>Resepsi</p>
        </div>
        <div className="sesi" data-aos="zoom-in-up">
          <p>11:00 - Selesai</p>
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
              Kendal, Jawa-Tengah
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resepsi {
          margin-bottom: 3rem;
        }

        .resepsi-content {
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

        .sesi {
          font-weight: bold;
          text-align: center;
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
      `}</style>
    </div>
  );
}

export default Resepsi;
