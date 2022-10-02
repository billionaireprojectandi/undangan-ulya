import Flower from "./flower";
import rules from "./rules";

function Protokol() {
  return (
    <div id="protokol">
      <div className="protokol container" data-aos="fade-up">
        <Flower />
        <div className="protokol-content-wrapper">
          <div className="protokol-header" data-aos="zoom-in-up">
            <p>Protokol Kesehatan</p>
          </div>
          <div className="protokol-content" data-aos="zoom-in-up">
            <p>
              Mengingat kondisi pandemi saat ini, kami menghimbau
              Bapak/Ibu/Saudara/i tamu undangan agar tetap memperhatikan
              protokol kesehatan dalam rangka upaya pencegahan penyebaran virus
              Covid-19.
            </p>
          </div>
          <div className="rules" data-aos="zoom-in-up">
            {rules.map((rule, idx) => {
              return (
                <div className="rules-wrapper" key={idx}>
                  <div className="rules-icon">{rule.icon}</div>
                  <div className="rules-desc">
                    <p>{rule.rules_desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .protokol {
            margin-bottom: 3rem;
          }
          .protokol-content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .protokol-header {
            font-family: "Great Vibes", serif;
            letter-spacing: 0.245rem;
            font-size: 1.5em;
            font-weight: bold;
          }

          .protokol-content {
            font-size: 0.8em;
            text-align: center;
          }

          .rules {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .rules-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 15%;
            padding: 0.25rem;
            border-radius: 0.5rem;
            background-color: rgb(255, 187, 204);
          }

          .rules-icon > svg {
            width: 0.5rem !important;
          }

          .rules-desc {
            font-size: 0.8em;
            text-align: center;
          }

          .rules-wrapper:hover {
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            transform: scale(1.15, 1.15);
          }
        `}</style>
      </div>
    </div>
  );
}

export default Protokol;
