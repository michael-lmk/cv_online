import React from "react";
import "./Home.css";
import imgbg from "../../assets/img_background.webp";
const HomePage = () => {
  return (
    <div className="home-content">
      <div className="left-content">
        <div className="intro">
          <h2>
            Salut ! Moi c'est <span className="name">Michael</span>.
          </h2>
          <p>
            je suis passionné par le développement web, et j’adore créer des projets sur mesure avec <b>React</b>, <b>NestJS…</b> et tout un tas d'autres outils selon les besoins.
          </p>
          <p>
            Que ce soit pour un <b>CRM</b>, une <b>bibliothèque musicale</b> ou une <b>application de gestion immobilière</b>, je construis des solutions efficaces, modernes et adaptées à chaque usage.
          </p>
          <p>
            Ce site me sert de <b>CV en ligne</b>, mais il a surtout été conçu pour <b>m’amuser avec les effets 3D en CSS…</b> parce qu’on peut être sérieux dans le fond, tout en s’amusant avec la forme !
          </p>
        </div>
      </div>
      <div className="right-content">
        <div className="m-4">
          <img
            className="image"
            src={imgbg}></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
