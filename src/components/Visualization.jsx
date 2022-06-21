import graphics from "./graphics.json";
import Embed from "./Embed";
import { ContentText } from "./ContentText";
import "./visualizacion.css";

export default function Visualization() {
  return (
    <div className="container-page-vis">
      <h1 className="title">
        Estado de salud de las personas de los Estados Unidos, mortalidad y
        factores importantes en el incremento o disminución del primero
        (2001-2013).
      </h1>
      {graphics.map((graphic, index) => (
        <>
          <ContentText graphic={graphic} />
          <Embed key={index} path={graphic.path} />
        </>
      ))}
      <div className="referencias">
        <h2>Referencias bibliográficas</h2>
        <p>
          [1] Pérez y Mariana. "Definición de Salud". Concepto Definición.
          https://conceptodefinicion.de/salud/. (accedido el 20 de junio de
          2022).
        </p>
      </div>
    </div>
  );
}
