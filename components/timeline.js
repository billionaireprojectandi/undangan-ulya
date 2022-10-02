import Flower from "./flower";

function Timeline(props) {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <p>Love Story</p>
      </div>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>25 Nov 2021</h2>
            <p>
              Berkenalan secara tidak sengaja dan tentunya dengan izin Allah di
              media sosial. Dan memutuskan untuk bertemu.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>28 Nov 2021</h2>
            <p>Pertama kali bertemu di salah satu cafe</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>5 Desember 2021</h2>
            <p>
              Kedua kali bertemu dan saling berkenalan dengan orang tua masing -
              masing.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>31 Januari 2022</h2>
            <p>
              Meminta izin orang tua untuk menikah dan membeli persiapan untuk
              lamaran
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>13 Februari 2022</h2>
            <p>Lamaran</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>27 Maret 2022</h2>
            <p>InsyaAllah menikah 😊</p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="close-button"
          onClick={() => props.setDisplayLoveStory(false)}
        >
          <p>Tutup</p>
        </div>
      </div>

      <style jsx>{`
        .timeline {
          margin-bottom: 3rem;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          padding: 1rem;
          background-color: rgb(254, 251, 243);
          z-index: 43;
          overflow: scroll;
          height: 100vh;
          width: 100%;
          text-align: center;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          text-align: center;
          padding-left: 1rem;
        }

        .timeline-header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .timeline-item {
          position: relative;
          width: 0.25rem;
          padding: 1rem 0;
          background: grey;
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 50%;
          transform: translateX(-50%);
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: inherit;
        }

        .timeline-content {
          position: relative;
          bottom: 0;
          width: calc(100vw - 6rem);
          padding: 1rem;
          background: rgb(244, 223, 186);
          left: 2.25rem;
          border-radius: 1rem;
        }

        .timeline-content::before {
          content: "";
          position: absolute;
          bottom: 50%;
          width: 0;
          height: 0;
          border-style: solid;
          left: -1rem;
          border-width: 0.5rem 1rem 0.5rem 0;
          border-color: transparent rgb(244, 223, 186) transparent transparent;
        }

        .close-button {
          padding: 0.5rem 0.75rem;
          border-radius: 0.25rem;
          background-color: rgb(191, 146, 112);
          margin: 1.5rem auto 0 auto;
          width: 10rem;
        }
      `}</style>
    </div>
  );
}

export default Timeline;
