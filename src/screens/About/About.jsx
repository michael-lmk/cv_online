import React from "react";
import "./About.css";
import moment from "moment";

import "moment/dist/locale/fr";
import { Col, Container, Row } from "reactstrap";

moment.locale("fr");

const About = () => {
  return (
    <Container className="about overflow-auto">
      <div className="d-flex justify-content-center">
        <h2 className="title text-center">A propros de moi !</h2>
      </div>
      <Row className="content">

        <Col sm={12} lg={6} className="item">
          <p>
            Je m'appelle <span className="name">Michael</span>, développeur web passionné depuis 2019. Autodidacte à mes débuts, après 2 ans je me suis lancer dans un DUT pour en apprendre d'avantage. j’ai rapidement orienté ma carrière vers la création de solutions sur mesure, alliant technique, design et logique métier.
          </p>
        </Col>
        <Col sm={12} lg={6} className="item"><p>J’utilise principalement React pour le front-end et NestJS pour le back-end. Je travaille aussi avec des outils comme TypeScript, PHP, SQLite, MySql, Figma, etc. J’aime concevoir des interfaces fluides, des APIs solides, et surtout, des applications qui ont du sens pour leurs utilisateurs.</p></Col>


        <Col sm={12} lg={12} className="item"><p>J’ai déjà eu l’occasion de développer : des CRM sur mesure pour une PME, une bibliothèque musicale avec prévisualisation audio, une appli de gestion immobilière multi-biens et plein d'autre encore ! Ce que j’aime : comprendre un besoin métier, y répondre avec une solution simple, efficace et bien pensée.</p></Col>

        <Col sm={12} lg={6} className="item"><p>Je crois en un code propre, maintenable et bien documenté. Pour moi, un bon projet, c’est avant tout une bonne communication avec le client, et une volonté d’améliorer continuellement l’expérience utilisateur./</p></Col>
        <Col sm={12} lg={6} className="item"><p>En dehors du code, je suis fan de [musique / jeux vidéo / randonnée / café bien serré…]. Et j’ai une petite obsession pour les animations CSS bien léchées 🤓</p></Col>

      </Row>
    </Container>
  );
};

export default About;
