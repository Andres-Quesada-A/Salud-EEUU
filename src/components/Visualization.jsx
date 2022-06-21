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
          [1] Pérez y Mariana. "Definición de Salud". Concepto Definición.https://conceptodefinicion.de/salud/. (accedido el 20 de junio de 2022).
        </p>
        <p>
          [2] USAFacts. "Most Common Causes of Death in The US". USAFacts. https://usafacts.org/articles/americans-causes-of-death-by-age-cdc-data/. (accedido el 21 de junio de 2022).
        </p>
        <p>
          [3] ”National Cardiovascular Disease Surveillance Data”. CDC Available: https://chronicdata.cdc.gov/Heart-Disease-Stroke-Prevention/National-Health-Interview-Survey-NHIS-National-Car/fwns-azgu/data
        </p>
        <p>
          [4] IHME. “Life expectancy,obesity and physical activity”. IHME.  Available: https://www.healthdata.org/us-health/data-download
        </p>
        <p>
          [5] ”The Hawaiian Diet: Traditional Native vs. "Local" Food”. Brittany Kennedt.  Available:https://delishably.com/world-cuisine/Hawaiian-Food-Culture-The-Evolution-and-Effects-of-Local-Food
        </p>
        <p>
          [6] ”Health Risks of Overweight & Obesity”.NIH Available: https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/health-risks
        </p>
        <p>
          [7] "¿Qué es el indicador Personal Income de los Estados Unidos?" Invezz. https://invezz.com/es/diccionario/ingresos-personales-estados-unidos/ (accedido el 21 de junio de 2022).
        </p>
        <p>
          [8] D. Thompson. "¿Por qué Estados Unidos gasta más en la atención de la salud?" Consumer Health News | HealthDay. https://consumer.healthday.com/h. (accedido el 21 de junio de 2022).
        </p>
      </div>
    </div>
  );
}
