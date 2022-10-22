import { useState } from "react";

function Gift(props) {
  const [copyStatus, setCopyStatus] = useState(false);
  const bankAccount = {
    BCA: "7960929220",
  };

  const handleCopy = (e, bankName) => {
    e.preventDefault();
    navigator.clipboard.writeText(bankAccount[bankName]);
    setCopyStatus(true);
    props.setDisplayRekening(false);
  };

  return (
    <div>
      <div className="gift container">
        <div className="gift-wrapper">
          <div
            className="close-button"
            onClick={() => props.setDisplayRekening(false)}
          >
            X
          </div>
          <div className="header">
            <p>Love Gift</p>
          </div>
          <div className="opening">
            <p>
              Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui:
            </p>
          </div>
          <div className="rekening-wrapper">
            <div className="rekening">
              <div className="icon">
                <img src="/asset/bank-bca.png" />
              </div>
              <div className="owner">
                a/n <strong>Ulya Rofiqul</strong>
              </div>
              <div className="nomor-rekening">{bankAccount.BCA}</div>
              <div
                className="copy-rekening"
                onClick={(e) => handleCopy(e, "BCA")}
              >
                <a>
                  <strong>{copyStatus ? "Tersalin" : "Salin Rekening"}</strong>
                </a>
              </div>
            </div>
          </div>
          <div className="closing">
            <p>Terimakasih</p>
          </div>
        </div>
      </div>
      <div
        className="gift-background"
        onClick={() => props.setDisplayRekening(false)}
      ></div>

      <style jsx>{`
        .gift {
          margin-bottom: 3rem;
          position: fixed;
          top: 5rem;
          // bottom: 0;
          right: 0;
          left: 0;
          z-index: 43;
          margin-top: auto;
          background-color: rgb(254, 251, 243);
          // height: 60vh;
        }

        .gift-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.8em;
          align-self: center;
        }

        .close-button {
          position: absolute;
          top: 0;
          right: 0;
          margin: 0.5rem 0.5rem 0 0;
          border-radius: 50%;
          width: 2rem;
          background-color: rgb(255, 187, 204);
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          padding: 0.5rem;
          font-size: 1.25em;
          display: block;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .rekening {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: auto;
          padding: 1rem 0;
          border-radius: 0.5rem;
        }

        .owner {
          font-size: 1.5em;
        }

        .nomor-rekening {
          font-size: 1.2em;
        }

        .copy-rekening {
          padding: 0.5rem 1rem;
          background-color: rgb(255, 187, 204);
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          border-radius: 0.25rem;
        }

        .closing {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.2em;
        }

        .fade-enter {
          opacity: 0;
          z-index: -30;
        }

        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
          z-index: -30;
        }

        .fade-exit {
          opacity: 1;
          z-index: -30;
        }

        .fade-exit-active {
          transition: opacity 300ms;
          opacity: 0;
          z-index: -30;
        }

        .gift-background {
          display: block;
          width: 100vw;
          height: 100vh;
          z-index: 42;
          background-color: rgba(0, 0, 0, 0.3);
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default Gift;
