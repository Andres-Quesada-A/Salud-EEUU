import graphics from "./graphics.json";
import Embed from "./Embed";
import { ContentText } from "./ContentText";


export default function Visualization(){
    return (
        <div className="container-page-vis">
            {graphics.map((graphic) => (
                <><Embed key={graphic.id} path={graphic.path} />
                <ContentText graphic={graphic} /></>
            ))}
        </div>
    );
}