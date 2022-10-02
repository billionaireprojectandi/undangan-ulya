import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-container">
            <div className="creator">
              <p>
                <strong>By aswebinaja</strong>
              </p>
            </div>
            <div className="contact">
              {/* <div className="contact-whatsapp-icon"></div> */}
              <a
                href="https://wa.me/6283894420949"
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-icon"
              ></a>
              {/* <div className="contact-instagram-icon"></div>  */}
              <a
                href="https://www.instagram.com/aswebinaja/"
                target="_blank"
                rel="noreferrer"
                className="contact-instagram-icon"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
          width: 100vw;
          height: 6rem;
          // background-color: green;
        }

        .footer-wrapper {
          width: inherit;
          height: 10rem;
          margin-top: 2rem;
          display: flex;
          align-items: start;
          // background-color: red;
        }

        .footer-container {
          width: inherit;
          height: 4rem;
          // background-color: blue;
          background-color: rgba(255, 239, 239, 0.75);
          border-top: 2px solid rgb(153, 21, 78);
          border-bottom: 2px solid rgb(153, 21, 78);
          z-index: 20;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact {
          display: flex;
          gap: 2rem;
        }

        .contact-whatsapp-icon {
          background-image: url("/asset/whatsapp.png");
        }
        .contact-instagram-icon {
          background-image: url("/asset/instagram.png");
        }

        .contact-whatsapp-icon,
        .contact-instagram-icon {
          width: 1.2rem;
          height: 1.2rem;
          background-size: cover;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  );
}

export default Footer;
