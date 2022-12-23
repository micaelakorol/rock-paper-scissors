import React from "react";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import "../styles/index.css";
import logo from "../images/logo.svg";

const Index = ({ score, selectIA, user, scoreIA }) => {
  const game = () => {
    if (selectIA === 0) {
      return <img src={rock} alt="Rock" />;
    }
    if (selectIA === 1) {
      return <img src={paper} alt="Paper" />;
    } else {
      return <img src={scissors} alt="Scissors" />;
    }
  };

  return (
    <main id="id-container">
      <section className="container-score">
        <img src={logo} alt="logo game" className="img" />
        {/* ---------------------Tabla de puntaje jugador-------------------------------------*/}
        <section className="table-score">
          <p className="title-score">SCORE</p>
          <p className="total-score">{score}</p>
        </section>
        {/*------------------- Tabla de puntaje maquina------------------------*/}
        <section className="table-score">
          <p className="title-score">SIRI</p>
          <p className="total-score">{scoreIA}</p>
        </section>
      </section>
      {/* ----------------- btn seleccionado por maquina---------------------------- */}

      <section className="section-ia">
        <section className="result-siri">
          <h2>Player: Siri </h2>
        </section>
        <button> {game()}</button>
      </section>
      {/*-------------- Tablero de botones de juego ----------------------------*/}
      <div className="section-game">
        <h2>Player: You</h2>
        <button onClick={() => user(0)} className="btn-1">
          {" "}
          <img src={rock} alt="rock" />{" "}
        </button>
        <button onClick={() => user(1)} className="btn-2">
          <img src={paper} alt="paper" />
        </button>
        <button onClick={() => user(2)} className="btn-3">
          <img src={scissors} alt="scissors" />
        </button>
      </div>
    </main>
  );
};

export default Index;
