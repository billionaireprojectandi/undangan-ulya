function Maps() {
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <div id="maps">
      <div className="maps container" data-aos="fade-up">
        <div className="gmap">
          <div className="gmap_canvas" data-aos="zoom-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.510886491793!2d107.0217775!3d-6.1961217999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989448654c9a7%3A0x5b3835a23d9493f8!2sGg.%20Nuri%20VI%2C%20Bahagia%2C%20Kec.%20Babelan%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017121!5e0!3m2!1sid!2sid!4v1660370590774!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="link-button" data-aos="zoom-in-up">
          <a
            // href="https://goo.gl/maps/JTubxLm8Fcjesq5Q6"
            onClick={() =>
              window.open(
                "https://goo.gl/maps/FfzFbSo96gVoSoJE9",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Buka di Google Maps
          </a>
        </div>

        <style jsx>{`
          .maps {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
            gap: 1rem;
            z-index: 10;
          }
          .gmap {
            border-radius: 0.5rem;
            width: 85vw;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            width: 100%;
            height: 100vw;
          }

          .link-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(255, 187, 204);
            border-radius: 0.25rem;
          }

          a {
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Maps;
