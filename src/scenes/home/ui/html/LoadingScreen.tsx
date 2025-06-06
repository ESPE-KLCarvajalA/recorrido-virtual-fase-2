import { useProgress } from "@react-three/drei";
import '../../styles/loadingScreen.css';

export const LoadingScreen = ({ started, onStarted, onHover }: any) => {
  const { progress } = useProgress();

  const bgImage = `${import.meta.env.BASE_URL}img/sede_santodomingo.webp`;

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`} style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="loadingScreen__board">

        <div className="content">
          <span className="loadingScreen__title1">Bienvenidos a la</span>
          <span className="loadingScreen__title2">Universidad de las Fuerzas Armadas</span>
          <span className="loadingScreen__title3">ESPE</span>
          <span className="loadingScreen__title4">Sede Santo Domingo de los Tsáchilas</span>

          <span className="loadingScreen__title5">Descubre nuestro Bloque A a través de un recorrido virtual interactivo, donde podrás explorar nuestras instalaciones de manera inmersiva y detallada.</span>
        </div>

        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={onStarted}
          onMouseEnter={onHover}
        >
          {progress < 100 ? `Cargando... ${progress.toFixed(2)}%` : 'Empezar'}
        </button>
      </div>

      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};