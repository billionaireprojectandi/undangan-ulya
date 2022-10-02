import Flower from "./flower";

/* eslint-disable @next/next/no-img-element */
function Prologue() {
  return (
    <div className="container prologue" data-aos="fade-up">
      <Flower />
      <div className="prologue-image" data-aos="zoom-in-up">
        <img src="/asset/basmallah.png" alt="basmallah.png" />
      </div>
      <div className="prologue-content" data-aos="zoom-in-up">
        <p>
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”{" "}
          <strong>(QS. Ar-Rum: 21)</strong>
        </p>
      </div>
      <style jsx>{`
        .prologue {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
        }

        .prologue-image > img {
          width: 16rem;
        }

        .prologue-content > p {
          text-align: center;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}
export default Prologue;
